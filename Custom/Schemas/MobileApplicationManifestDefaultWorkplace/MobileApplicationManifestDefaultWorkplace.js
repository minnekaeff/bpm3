{
	"SyncOptions": {
		"SysSettingsImportConfig": [
			"DefaultMessageLanguage"
		],
		"ModelDataImportConfig": [
			{
				"Name": "Contact",
				"SyncColumns": []
			},
			{
				"Name": "SysLanguage",
				"SyncColumns": []
			},
			{
				"Name": "ContactCareer",
				"SyncColumns": [
					"Contact",
					"Id"
				]
			},
			{
				"Name": "ContactCommunication",
				"SyncColumns": [
					"CommunicationType",
					"Number",
					"Contact"
				]
			},
			{
				"Name": "CommunicationType",
				"SyncColumns": []
			},
			{
				"Name": "ContactAddress",
				"SyncColumns": [
					"AddressType",
					"Country",
					"Region",
					"City",
					"Address",
					"Zip",
					"Contact"
				]
			},
			{
				"Name": "AddressType",
				"SyncColumns": []
			},
			{
				"Name": "Country",
				"SyncColumns": []
			},
			{
				"Name": "Region",
				"SyncColumns": []
			},
			{
				"Name": "City",
				"SyncColumns": []
			},
			{
				"Name": "ContactAnniversary",
				"SyncColumns": [
					"Date",
					"AnniversaryType",
					"Contact"
				]
			},
			{
				"Name": "AnniversaryType",
				"SyncColumns": []
			},
			{
				"Name": "SocialMessage",
				"SyncColumns": [
					"EntityId"
				]
			}
		]
	},
	"Modules": {},
	"Models": {
		"ContactCareer": {
			"RequiredModels": [
				"ContactCareer",
				"Contact",
				"SocialMessage"
			],
			"ModelExtensions": [],
			"PagesExtensions": [
				"ICLMobileContactCareerActionsSettingsDefaultWorkplace",
				"ICLMobileContactCareerGridPageSettingsDefaultWorkplace",
				"ICLMobileContactCareerRecordPageSettingsDefaultWorkplace",
				"ICLMobileContactCareerModuleConfig"
			]
		},
		"SocialMessage": {
			"RequiredModels": [],
			"ModelExtensions": [],
			"PagesExtensions": []
		},
		"Contact": {
			"RequiredModels": [
				"Contact",
				"SysLanguage",
				"ContactCareer",
				"ContactCommunication",
				"CommunicationType",
				"ContactAddress",
				"AddressType",
				"Country",
				"Region",
				"City",
				"ContactAnniversary",
				"AnniversaryType"
			],
			"ModelExtensions": [],
			"PagesExtensions": [
				"MobileContactRecordPageSettingsDefaultWorkplace",
				"ICLMobileContactModuleConfig"
			]
		}
	}
}