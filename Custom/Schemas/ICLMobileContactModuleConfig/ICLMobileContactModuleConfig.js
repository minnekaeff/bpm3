
// Terrasoft.sdk.Details.setChangeModes("Contact", 
// 	"ContactCareerDetailV2StandardDetail", 
// 	[Terrasoft.ChangeModes.Read]
// );

//значение по умолчанию
Terrasoft.sdk.Model.setDefaultValuesFunc("Contact", function (config) {
   config.record.set("Name", "qqww");
   Ext.callback(config.success, config.scope);
});

// Terrasoft.sdk.Details.configure("Contact", "ContactCareerDetailV2StandardDetail", {
// 	filters: Ext.create("Terrasoft.Filter", {
// 		type: Terrasoft.FilterTypes.Group,
// 		subfilters: [
// 			Ext.create("Terrasoft.Filter", {
// 				compareType: Terrasoft.ComparisonTypes.Equal,
// 				property: "Primary",
// 				value: false
// 			})
// 		]
// 	})
// });
