[
	{
		"operation": "merge",
		"name": "settings",
		"values": {
			"localizableStrings": {
				"primaryColumnSetContact_caption": "Основная информация",
				"ContactCommunicationDetailEmbeddedDetailContact_caption": "Средства связи Контакта ",
				"ContactAddressDetailV2EmbeddedDetailContact_caption": "Адреса Контакта",
				"jobColumnSetContact_caption": "Место работы",
				"ContactAnniversaryDetailV2EmbeddedDetailContact_caption": "Знаменательные события Контакта",
				"ActivityDetailV2StandartDetailContact_caption": "Активности",
				"SocialMessageDetailCaptionContact_caption": "Лента",
				"ContactCareerDetailV2StandardDetailContact_caption": "Карьера"
			}
		}
	},
	{
		"operation": "merge",
		"name": "eb04facc-0b61-43a4-983a-8c114eec6d1b",
		"values": {
			"content": "ФИО"
		}
	},
	{
		"operation": "merge",
		"name": "9a4cff61-0594-439e-8b94-874adbea8b61",
		"values": {
			"content": "Контрагент"
		}
	},
	{
		"operation": "merge",
		"name": "4e5359c4-9805-4850-b6b5-9da6a38f10ce",
		"values": {
			"content": "Номер"
		}
	},
	{
		"operation": "merge",
		"name": "1a7c0d7f-50f4-48d7-ad5a-f7cf14258271",
		"values": {
			"content": "Тип"
		}
	},
	{
		"operation": "merge",
		"name": "43f1ac43-ddd2-4389-8ccf-782a89bf47c9",
		"values": {
			"content": "Тип адреса"
		}
	},
	{
		"operation": "merge",
		"name": "df7d53ec-885a-43b7-99ec-14f0e9f36d78",
		"values": {
			"content": "Адрес"
		}
	},
	{
		"operation": "merge",
		"name": "7af60027-7759-456d-848f-de3a7bbd727a",
		"values": {
			"content": "Город"
		}
	},
	{
		"operation": "merge",
		"name": "0bc9e17d-d39b-4082-886c-0693181175a4",
		"values": {
			"content": "Область/штат"
		}
	},
	{
		"operation": "merge",
		"name": "7fd1d967-c76d-4523-87b8-ea32b6f6da3c",
		"values": {
			"content": "Страна"
		}
	},
	{
		"operation": "merge",
		"name": "322bdac5-8965-4571-8ef1-180e1da25634",
		"values": {
			"content": "Индекс"
		}
	},
	{
		"operation": "merge",
		"name": "2883d472-fa1c-469a-b83f-ac45fa50c616",
		"values": {
			"content": "Департамент"
		}
	},
	{
		"operation": "merge",
		"name": "6b01ece7-8756-470c-85da-afc17498fcba",
		"values": {
			"content": "Полное название должности"
		}
	},
	{
		"operation": "merge",
		"name": "b403e8ed-1be7-4fdb-b188-f810b7908132",
		"values": {
			"content": "Должность"
		}
	},
	{
		"operation": "merge",
		"name": "42bf4ab2-5129-4254-a6a9-de73d7aca21a",
		"values": {
			"content": "Дата"
		}
	},
	{
		"operation": "merge",
		"name": "2ec8b723-edba-4ca0-bd00-006db58a5d13",
		"values": {
			"content": "Тип"
		}
	},
	{
		"operation": "insert",
		"name": "ContactCareerDetailV2StandardDetail",
		"values": {
			"caption": "ContactCareerDetailV2StandardDetailContact_caption",
			"entitySchemaName": "ContactCareer",
			"filter": {
				"detailColumn": "Contact",
				"masterColumn": "Id"
			},
			"detailSchemaName": "ContactCareerDetailV2",
			"operation": "insert"
		},
		"parentName": "settings",
		"propertyName": "details",
		"index": 2
	}
]