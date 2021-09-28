// INTEGRATION TESTS
//
// Execute MDE required integration
// tests via. Mocha test framework.
//
const path = require('path');
const Mocha = require('mocha');
// Instantiate a new Mocha Instance
// with our MDE Required Reporting
// configuration.
const mocha = new Mocha({
    reporter: 'mochawesome',
    reporterOptions: {
        reportDir: path.join(__dirname, '../reports/integrationTests'),
        reportFilename: 'index',
        reportTitle: '@vhelp/vhelpspa Integration Tests',
        reportPageTitle: '@vhelp/vhelpspa Integration Tests',
        inlineAssets: true
    }
});
// At the moment there is one integration
// test file.  If in the future there are
// multiple, they should either be added
// here or the logic replaced with a scan
// of the test directory.
mocha.addFile(path.join(__dirname, 'server-it.js'));
// Execute the tests identified and
// create tthe report, exit 0 if no
// errors are found.
mocha.run(function (failures) {
    process.exitCode = failures ? 1 : 0; // exit with non-zero status if there were failures
});
