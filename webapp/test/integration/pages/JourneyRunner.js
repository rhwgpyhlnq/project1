sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"project1/test/integration/pages/RunsList.gen",
	"project1/test/integration/pages/RunsObjectPage.gen",
	"project1/test/integration/pages/SimulationsObjectPage.gen"
], function (JourneyRunner, RunsListGenerated, RunsObjectPageGenerated, SimulationsObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('project1') + '/test/flpSandbox.html#project1-tile',
        pages: {
			onTheRunsListGenerated: RunsListGenerated,
			onTheRunsObjectPageGenerated: RunsObjectPageGenerated,
			onTheSimulationsObjectPageGenerated: SimulationsObjectPageGenerated
        },
        async: true
    });

    return runner;
});

