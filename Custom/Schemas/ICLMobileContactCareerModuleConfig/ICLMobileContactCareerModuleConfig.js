// Terrasoft.sdk.RecordPage.configureColumn("ContactCareer", "primaryColumnSet", "JobTitle", {
//   readOnly: true
// });

// Установка колонки [Должность] в качестве первичной.
Terrasoft.sdk.GridPage.setPrimaryColumn("ContactCareer", "JobTitle");

// Добавление колонки [Должность] в коллекцию первичных колонок. 
Terrasoft.sdk.RecordPage.addColumn("ContactCareer", {
	name: "JobTitle"
}, "primaryColumnSet");

Terrasoft.sdk.RecordPage.addColumn("ContactCareer", {
	name: "Description"
});

Terrasoft.sdk.RecordPage.addColumn("ContactCareer", {
	name: "Primary"
});

Terrasoft.sdk.GridPage.setSubtitleColumns("ContactCareer", ["Description", "Primary"]);

// Удаление предыдущей первичной колонки [Контакт] из коллекции первичных колонок. 
Terrasoft.sdk.RecordPage.removeColumn("ContactCareer", "Contact", "primaryColumnSet"); 

// Terrasoft.sdk.Module.addFilter("ContactCareer", Ext.create("Terrasoft.Filter", {
// 	type: "Terrasoft.FilterTypes.Group",
// 	logicalOperation: "Terrasoft.FilterLogicalOperations.And",
// 	subfilters: [
// 		{
// 			compareType: Terrasoft.ComparisonTypes.Equal,
// 			property: "Primary",
// 			value: true
// 		}
// 	]
// }));