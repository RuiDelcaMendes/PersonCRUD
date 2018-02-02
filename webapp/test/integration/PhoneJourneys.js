jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"personNS/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"personNS/test/integration/pages/App",
	"personNS/test/integration/pages/Browser",
	"personNS/test/integration/pages/Master",
	"personNS/test/integration/pages/Detail",
	"personNS/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "personNS.view."
	});

	sap.ui.require([
		"personNS/test/integration/NavigationJourneyPhone",
		"personNS/test/integration/NotFoundJourneyPhone",
		"personNS/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});