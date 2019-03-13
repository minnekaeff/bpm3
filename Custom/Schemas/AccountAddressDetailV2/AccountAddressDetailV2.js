define("AccountAddressDetailV2", ["ICLDetailUtils"], function(ICLDetailUtils) {
	return {
		entitySchemaName: "AccountAddress",
		diff: /**SCHEMA_DIFF*/ [] /**SCHEMA_DIFF*/,
		methods: {
			addColumnLink: ICLDetailUtils.addColumnLink,
		}
	};
});
