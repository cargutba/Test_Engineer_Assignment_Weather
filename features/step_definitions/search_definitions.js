'use strict';

browser.ignoreSynchronization = true;

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const homepage = require('../../pages/homepage');
const weatherpage = require('../../pages/weatherpage');

chai.use(chaiAsPromised);
const expect = chai.expect;

module.exports = function() {

    this.Given(/^I go to the homepage$/, (done) => {
        /**
         * It will disable angular sync. Protractor waits for Angular promises usually.
         * As practice shows, this often leads to instability tests and performance issues.
         */
        browser.ignoreSynchronization = true;
        homepage.navigate();
        homepage.waitForPage().then(() => done());
    });

    this.When(/^I insert "([^"]*)" in the global search field$/, (text, done) => {
        const search = homepage.getGlobalSearchComponent();
        search.setText(text).then(() => done());
    });

    this.When(/^I select "([^"]*)" from the list$/, (match, done) => {
        const search = homepage.getGlobalSearchComponent();
        search.pickResult(match).then(() => done());
    });

    this.Then(/^I should see the weather page$/, (done) => {
        weatherpage.waitForPage();
        const location = weatherpage.getLocation();
        expect(location).to.eventually.equal('AMSTERDAM, NETHERLANDS')
            .then(() => done());
    });

};
