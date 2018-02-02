jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Persons in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"personNS/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"personNS/test/integration/pages/App",
	"personNS/test/integration/pages/Browser",
	"personNS/test/integration/pages/Master",
	"personNS/test/integration/pages/Detail",
	"personNS/test/integration/pages/Create",
	"personNS/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "personNS.view."
	});

	sap.ui.require([
		"personNS/test/integration/MasterJourney",
		"personNS/test/integration/NavigationJourney",
		"personNS/test/integration/NotFoundJourney",
		"personNS/test/integration/BusyJourney",
		"personNS/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});