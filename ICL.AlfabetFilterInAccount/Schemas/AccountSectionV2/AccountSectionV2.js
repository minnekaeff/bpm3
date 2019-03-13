define("AccountSectionV2", [], function() {
	return {
		entitySchemaName: "Account",
		attributes: {
			"ButtonAttrTag": {
				dataValueType: Terrasoft.DataValueType.TEXT,
				type: Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				value: ""
			},
			"RuButtonGroupVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				type: Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				value: true
			},
			"EnButtonGroupVisible": {
				dataValueType: Terrasoft.DataValueType.BOOLEAN,
				type: Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
				value: false
			}
		},
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
			
			//region Alfabet
			
			//region Alfabet: Containers
			{
				"operation": "insert",
				"name": "IsActiveFiltersContainer",
				"parentName": "FiltersContainer",
				"propertyName": "items",
				"index": 0,
				"values": {
					"id": "IsActiveFiltersContainer",
					"itemType": this.Terrasoft.ViewItemType.CONTAINER,
					"visible": true,
					"items": []
				}
			},
			//endregion
			
			//region Alfabet: Button groups
			{
				"operation": "insert",
				"name": "RuButtonGroup",
				"parentName": "IsActiveFiltersContainer",
				"propertyName": "items",
				"index": 0,
				"values": {
					"itemType": this.Terrasoft.ViewItemType.CONTAINER,
					"visible": {"bindTo": "RuButtonGroupVisible"},
					"items": []
				}
			},
			{
				"operation": "insert",
				"name": "EnButtonGroup",
				"parentName": "IsActiveFiltersContainer",
				"propertyName": "items",
				"index": 0,
				"values": {
					"itemType": this.Terrasoft.ViewItemType.CONTAINER,
					"visible": {"bindTo": "EnButtonGroupVisible"},
					"items": []
				}
			},
			//endregion
			
			//region Alfabet: RU Buttons
			{
				"operation": "insert",
				"name": "RuButton0",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"style": Terrasoft.controls.ButtonEnums.style.GREEN,
					"caption": "RU",
					"click": {"bindTo": "onChangeLanguageClick"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton1",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "А",
					"click": {"bindTo": "onSortClick"},
					"tag": "А",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton2",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "Б",
					"click": {"bindTo": "onSortClick"},
					"tag": "Б",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton3",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "В",
					"click": {"bindTo": "onSortClick"},
					"tag": "В",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton4",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "Г",
					"click": {"bindTo": "onSortClick"},
					"tag": "Г",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton5",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "Д",
					"click": {"bindTo": "onSortClick"},
					"tag": "Д",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton6",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "Е",
					"click": {"bindTo": "onSortClick"},
					"tag": "Е",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton7",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "Ж",
					"click": {"bindTo": "onSortClick"},
					"tag": "Ж",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton8",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "З",
					"click": {"bindTo": "onSortClick"},
					"tag": "З",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton9",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "И",
					"click": {"bindTo": "onSortClick"},
					"tag": "И",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton10",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "К",
					"click": {"bindTo": "onSortClick"},
					"tag": "К",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton11",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "Л",
					"click": {"bindTo": "onSortClick"},
					"tag": "Л",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton12",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "М",
					"click": {"bindTo": "onSortClick"},
					"tag": "М",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton13",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "Н",
					"click": {"bindTo": "onSortClick"},
					"tag": "Н",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton14",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "О",
					"click": {"bindTo": "onSortClick"},
					"tag": "О",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton15",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "П",
					"click": {"bindTo": "onSortClick"},
					"tag": "П",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton16",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "Р",
					"click": {"bindTo": "onSortClick"},
					"tag": "Р",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton17",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "С",
					"click": {"bindTo": "onSortClick"},
					"tag": "С",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton18",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "Т",
					"click": {"bindTo": "onSortClick"},
					"tag": "Т",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton19",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "У",
					"click": {"bindTo": "onSortClick"},
					"tag": "У",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton20",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "Ф",
					"click": {"bindTo": "onSortClick"},
					"tag": "Ф",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton21",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "Х",
					"click": {"bindTo": "onSortClick"},
					"tag": "Х",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton22",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "Ц",
					"click": {"bindTo": "onSortClick"},
					"tag": "Ц",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton23",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "Ч",
					"click": {"bindTo": "onSortClick"},
					"tag": "Ч",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton24",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "Ш",
					"click": {"bindTo": "onSortClick"},
					"tag": "Ш",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton25",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "Щ",
					"click": {"bindTo": "onSortClick"},
					"tag": "Щ",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton26",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "Э",
					"click": {"bindTo": "onSortClick"},
					"tag": "Э",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton27",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "Ю",
					"click": {"bindTo": "onSortClick"},
					"tag": "Ю",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "RuButton28",
				"parentName": "RuButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "Я",
					"click": {"bindTo": "onSortClick"},
					"tag": "Я",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			//endregion
			
			//region Alfabet: EN Buttons
			{
				"operation": "insert",
				"name": "EnButton0",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"style": Terrasoft.controls.ButtonEnums.style.GREEN,
					"caption": "EN",
					"click": {"bindTo": "onChangeLanguageClick"}
				}
			},
			{
				"operation": "insert",
				"name": "EnButton1",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "A",
					"click": {"bindTo": "onSortClick"},
					"tag": "A",
					"pressed": {"bindTo": "isButtonPressed"},
				}
			},
			{
				"operation": "insert",
				"name": "EnButton2",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "B",
					"click": {"bindTo": "onSortClick"},
					"tag": "B",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "EnButton3",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "C",
					"click": {"bindTo": "onSortClick"},
					"tag": "C",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "EnButton4",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "D",
					"click": {"bindTo": "onSortClick"},
					"tag": "D",
					"pressed": {"bindTo": "isButtonPressed"},
				}
			},
			{
				"operation": "insert",
				"name": "EnButton5",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "E",
					"click": {"bindTo": "onSortClick"},
					"tag": "E",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "EnButton6",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "F",
					"click": {"bindTo": "onSortClick"},
					"tag": "F",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "EnButton7",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "G",
					"click": {"bindTo": "onSortClick"},
					"tag": "G",
					"pressed": {"bindTo": "isButtonPressed"},
				}
			},
			{
				"operation": "insert",
				"name": "EnButton8",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "H",
					"click": {"bindTo": "onSortClick"},
					"tag": "H",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "EnButton9",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "I",
					"click": {"bindTo": "onSortClick"},
					"tag": "I",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "EnButton10",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "J",
					"click": {"bindTo": "onSortClick"},
					"tag": "J",
					"pressed": {"bindTo": "isButtonPressed"},
				}
			},
			{
				"operation": "insert",
				"name": "EnButton11",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "K",
					"click": {"bindTo": "onSortClick"},
					"tag": "K",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "EnButton12",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "L",
					"click": {"bindTo": "onSortClick"},
					"tag": "L",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "EnButton13",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "M",
					"click": {"bindTo": "onSortClick"},
					"tag": "M",
					"pressed": {"bindTo": "isButtonPressed"},
				}
			},
			{
				"operation": "insert",
				"name": "EnButton14",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "N",
					"click": {"bindTo": "onSortClick"},
					"tag": "N",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "EnButton15",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "O",
					"click": {"bindTo": "onSortClick"},
					"tag": "O",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "EnButton16",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "P",
					"click": {"bindTo": "onSortClick"},
					"tag": "P",
					"pressed": {"bindTo": "isButtonPressed"},
				}
			},
			{
				"operation": "insert",
				"name": "EnButton17",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "Q",
					"click": {"bindTo": "onSortClick"},
					"tag": "Q",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "EnButton18",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "R",
					"click": {"bindTo": "onSortClick"},
					"tag": "R",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "EnButton19",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "S",
					"click": {"bindTo": "onSortClick"},
					"tag": "S",
					"pressed": {"bindTo": "isButtonPressed"},
				}
			},
			{
				"operation": "insert",
				"name": "EnButton20",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "T",
					"click": {"bindTo": "onSortClick"},
					"tag": "T",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "EnButton21",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "U",
					"click": {"bindTo": "onSortClick"},
					"tag": "U",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "EnButton22",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "V",
					"click": {"bindTo": "onSortClick"},
					"tag": "V",
					"pressed": {"bindTo": "isButtonPressed"},
				}
			},
			{
				"operation": "insert",
				"name": "EnButton23",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "W",
					"click": {"bindTo": "onSortClick"},
					"tag": "W",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "EnButton24",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "X",
					"click": {"bindTo": "onSortClick"},
					"tag": "X",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "EnButton25",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "Y",
					"click": {"bindTo": "onSortClick"},
					"tag": "Y",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			},
			{
				"operation": "insert",
				"name": "EnButton26",
				"parentName": "EnButtonGroup",
				"propertyName": "items",
				"values": {
					"itemType": this.Terrasoft.ViewItemType.BUTTON,
					"caption": "Z",
					"click": {"bindTo": "onSortClick"},
					"tag": "Z",
					"pressed": {"bindTo": "isButtonPressed"}
				}
			}
			//endregion
			
			//endregion
			
		]/**SCHEMA_DIFF*/,
		methods: {
			init: function(callback, scope) {
				this.callParent(arguments);
				this.subscribeEvents();
			},
			// переопределение фильров
			getFilters: function() {
				var filters = this.callParent(arguments);
				filters.removeByKey("AlfabetFilter");
				if (this.$ButtonAttrTag !== "") {
					filters.add("AlfabetFilter", this.Terrasoft.createColumnFilterWithParameter(
						this.Terrasoft.ComparisonType.START_WITH, "Name", this.$ButtonAttrTag));
				}
				return filters;
			},
			// подписка на событие изменение атрибута
			subscribeEvents: function() {
				this.on("change:ButtonAttrTag", this.onShowProcessedQueueItemChanged.bind(this));
			},
			// обновление грида для применения фильтрации
			onShowProcessedQueueItemChanged: function(model, showProcessedQueueItem) {
				this.set("IsClearGridData", true);
				this.deselectRows();
				this.afterFiltersUpdated();
			},
			// нажата ли кнопка
			isButtonPressed: function(tag) {
				// проверка на повторное нажатие кнопки
				if (this.$ButtonAttrTag === tag) {
					return true;
				} else {
					return false;
				}
			},
			// установка фильтра 
			onSortClick: function(event, dom, options, buttonTag) {
				if (this.$ButtonAttrTag === buttonTag) {
					this.$ButtonAttrTag = "";
				} else {
					this.$ButtonAttrTag = buttonTag;
				}
			},
			// переключение языка алфавита
			onChangeLanguageClick: function() {
				// очищаем фильтр
				this.$ButtonAttrTag = "";
				// переключаем язык
				this.$EnButtonGroupVisible = !this.$EnButtonGroupVisible;
				this.$RuButtonGroupVisible = !this.$RuButtonGroupVisible;
			}
		}
	};
});
