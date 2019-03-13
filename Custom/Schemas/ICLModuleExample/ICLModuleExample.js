define("ICLModuleExample", [], function () {
    var addTagModule = Ext.define("Terrasoft.configuration.ICLModuleExample", {
        alternateClassName: "Terrasoft.ICLModuleExample",
        extend: "Terrasoft.BaseModule",
        Ext: null,
        sandbox: null,
        Terrasoft: null,
        viewModel: null,
        view: null,
        init: function () {
            this.callParent(arguments);
            this.initViewModel();
        },
        // Инициализирует модель представления.
        initViewModel: function () {
        	debugger;
            var self = this;
            this.viewModel = Ext.create("Terrasoft.BaseViewModel", {
                values: {
                    btnAttr: "",
                    enButtonGroupVisible: false,
                    ruButtonGroupVisible: true
                },
                methods: {
                    // Обработчик нажатия на кнопку.
                    onClickBtn: function (event, dom, options, buttonTag) {
                    	debugger;
                        //self.destroy();
                        if (this.$btnAttr === buttonTag) {
							this.$btnAttr = "";
						} else {
							this.$btnAttr = buttonTag;
						}
                        
                    },
                    isButtonPressed: function(tag) {
						// проверка на повторное нажатие кнопки
						if (this.$btnAttr === tag) {
							return true;
						} else {
							return false;
						}
					},
					onChangeLanguageClick: function() {
						// очищаем фильтр
						this.$btnAttr = "";
						// переключаем язык
						this.$enButtonGroupVisible = !this.$enButtonGroupVisible;
						this.$ruButtonGroupVisible = !this.$ruButtonGroupVisible;
					}
                }
            });
        },
        
        createButton: function(localize, index, tag) {
			var buttonConfig = {
				id: localize + index,
			    className: "Terrasoft.Button",
			    caption: tag,
			    tag: tag,
			    pressed: { bindTo: "isButtonPressed" },
			    click: { bindTo: "onClickBtn" }
			}
			return buttonConfig;
        },
        
        createRu: function() {
        	
        	var buttons = [];
        	
        	var ruLetters = ["А", "Б", "В"];
        	
        	var buttonConfig = {
				id: "ru0",
			    className: "Terrasoft.Button",
			    caption: "RU",
			    style: Terrasoft.controls.ButtonEnums.style.GREEN,
			    click: { bindTo: "onChangeLanguageClick" }
			}
        	buttons.push(buttonConfig);
        	
        	var i = 1;
        	Terrasoft.each(ruLetters, function(propertyValue) {
        		var temp = this.createButton("ru", i, propertyValue);
        		buttons.push(temp);
        		i = i + 1;
			}, this);
        	
        	var viewConfig = {
				className: "Terrasoft.Container",
				id: "RuButtonGroup",
				visible: { bindTo: "ruButtonGroupVisible" },
				items: buttons
			};
			
			return viewConfig;
        },
        
        createEn: function() {
        	
        	var buttons = [];
        	
        	var ruLetters = ["A", "B", "C"];
        	
        	var buttonConfig = {
				id: "en0",
			    className: "Terrasoft.Button",
			    caption: "EN",
			    style: Terrasoft.controls.ButtonEnums.style.GREEN,
			    click: { bindTo: "onChangeLanguageClick" }
			}
        	buttons.push(buttonConfig);
        	
        	var i = 1;
        	Terrasoft.each(ruLetters, function(propertyValue) {
        		var temp = this.createButton("en", i, propertyValue);
        		buttons.push(temp);
        		i = i + 1;
			}, this);
        	
        	var viewConfig = {
				className: "Terrasoft.Container",
				id: "EnButtonGroup",
				visible: { bindTo: "enButtonGroupVisible" },
				items: buttons
			};
			
			return viewConfig;
        },
        
        render: function (renderTo) {
        	debugger;
        	
        	var containers = [];
			
			var ruAlfabet = this.createRu();
			var enAlfabet = this.createEn();
			
			containers.push(ruAlfabet);
			containers.push(enAlfabet);
			
			var viewConfig = {
				className: "Terrasoft.Container",
				renderTo: renderTo,
				id: "ButtonGroups",
				items: containers
			};
        	var z = Ext.create("Terrasoft.Container", viewConfig);
            this.view = z;
            
            // Связывает представление и модель представления.
            this.view.bind(this.viewModel);
            // Возвращает представление, которое будет вставлено в DOM.
            return this.view;
        },


        // Удаляет неиспользуемые объекты.
        destroy: function () {
            // Уничтожает представление, что приводит к удалению кнопки из DOM.
            this.view.destroy();
            // Удаляет неиспользуемую модель представления.
            this.viewModel.destroy();
        }
        
        
    });
    //Возвращает объект модуля.
    return addTagModule;
    
    
    
    
    
    
    
	// var ruLetters = ["А"];
	
	// var enLetters = ["A", "B", "C"];
	
	// function createRuButtons() {
	// 	debugger;
	// 	Terrasoft.each(ruLetters, function(propertyValue) {
			
	// 		var button = createButton(propertyValue);
	// 		var cmp = Ext.getCmp("IsActiveFiltersContainer");
	// 		cmp.items.add(button);
			
	// 		cmp.reRender(button);
	// 	}, this);
	// };
	
	// function createButton(tag) {
	// 	var button = Ext.create("Terrasoft.Button", {
	// 		id: "example-btn",
	// 		className: "Terrasoft.Button",
	// 		caption: tag,
	// 		tag: tag,
	// 		classes: {
	// 			textClass: ["t-btn-wrapper t-btn-text t-btn-style-default"]
	// 		},
	// 		click: {bindTo: "onSortClick"},
	// 		visible: true,
	// 		//pressed: onChangeLanguageClick
	// 	});
	// 	return button;
	// };
	
	// // function isButtonPressed(tag) {
	// // 	// проверка на повторное нажатие кнопки
	// // 	if (this.get("ButtonAttrTag") === tag) {
	// // 		return true;
	// // 	} else {
	// // 		return false;
	// // 	}
	// // },
	// // // установка фильтра 
	// function onSortClick(event, dom, options, buttonTag) {
	// 	debugger;
	// 	if (this.get("ButtonAttrTag") === buttonTag) {
	// 		this.set("ButtonAttrTag", "");
	// 	} else {
	// 		this.set("ButtonAttrTag", buttonTag);
	// 	}
	// };
	// // // переключение языка алфавита
	// // function onChangeLanguageClick() {
	// // 	// очищаем фильтр
	// // 	this.set("ButtonAttrTag", "");
	// // 	// переключаем язык
	// // 	this.set("EnButtonGroupVisible", !this.get("EnButtonGroupVisible"));
	// // 	this.set("RuButtonGroupVisible", !this.get("RuButtonGroupVisible"));
	// // }
	
	// return {
	// 	createRuButtons: createRuButtons,
	// 	createButton: createButton
	// 	// getRuleValue: getRuleValue,
	// 	// prepareViewRule: prepareViewRule,
	// 	// prepareViewModelRule: prepareViewModelRule
	// };
});