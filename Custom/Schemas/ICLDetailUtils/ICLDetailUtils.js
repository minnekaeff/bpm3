define("ICLDetailUtils", ["ICLDetailUtilsResources"], function(resources) {
	
	return {
		
		addColumnLink: function(item, column) {
			debugger;
			var columnPath = column.columnPath;
			var columnIdName = item.primaryColumnName;
			
			if (columnPath === item.primaryDisplayColumnName) {
				item["on" + columnPath + "LinkClick"] = function() {
					var value = this.get(columnPath);
					var recordId = this.get(columnIdName);
					return {
						caption: value,
						target: "_self",
						title: value,
						url: ""
					};
				};
			} else if(columnPath === "Primary") {
				item["on" + columnPath + "LinkClick"] = function() {
					var value = this.get(columnPath);
					var recordId = this.get(columnIdName);
					var caption = value === true ? resources.localizableStrings.DisableButtonCaption : resources.localizableStrings.EnableButtonCaption;
					return {
						caption: caption,
						target: "_self",
						title: caption,
						url: ""
					};
				};
			} else {
				this.callParent(arguments);
			}
		},
			
		linkClicked: function(recordId, columnName) {
			if (columnName === "Name") {
				var gridData = this.getGridData();
				var activeRow = gridData.get(recordId);
				var scope = this;
				setTimeout(function() {
					scope.editRecord(activeRow);
				}, 0);
				
				return false;
			} if (columnName === "IsActive") {
				var data = this.getGridData();
				var row = data.get(recordId);
				this.activateObject(row, recordId);
				return false;
			} else {
				return this.callParent(arguments);
			}
		},
		
		updateRowStyle: function(recordId, isActive) {
			var rowElementId = this.entitySchemaName + 'DetailDataGridGrid-item-' + recordId;
			var element = document.getElementById(rowElementId);
			if(element) {
				if(isActive) {
					element.style = {};
				} else {
					element.style.backgroundColor = "#F2F2F2";
				}
			}
		},
		
		activateObject: function(row, recordId) {
			var isActive = row.get("IsActive");
			row.set("IsActive", !isActive);
			this.updateRowStyle(recordId, !isActive);
			
			var updateQuery = this.Ext.create("Terrasoft.UpdateQuery", {
				rootSchemaName: this.entitySchemaName
			});
			updateQuery.filters.addItem(Terrasoft.createColumnFilterWithParameter(Terrasoft.ComparisonType.EQUAL, "Id", recordId));
			updateQuery.setParameterValue("IsActive", !isActive, this.Terrasoft.DataValueType.BOOLEAN);
			updateQuery.execute(function(response){
				// TODO: handle
			}, this);
		},
		
		gridRecolor: function() {
			var gridData = this.getGridData();
			var items = gridData.getItems();
			var loadedObject = {};
			Terrasoft.each(items, function (item) {
				var isActive = item.get("IsActive");
				if(!isActive){
					item.customStyle = {
						'background-color' : "#F2F2F2"
					}
				}
				var primaryValue = item.get(item.primaryColumnName);
				loadedObject[primaryValue] = item;
			}, this);
			gridData.clear();
			gridData.loadAll(loadedObject);
		},
		
		onGridDataLoaded : function() {
			this.callParent(arguments);
			this.gridRecolor();
		},
	
	};
});