/**
 * here use expected conditions for waiting elements of pages
 */

const EC = protractor.ExpectedConditions;
const GlobalSearchComponent = require('./components/GlobalSearchComponent');

const url = 'https://weather.com/en-GB';

/**
 * page elements
 */
const header = element(by.id('wx-header-wrap'));
const search = element(by.model('term'));

module.exports = {
        /**
         * using for navigating to the page
         * @returns {Promise<void>}
         */
        navigate: () => {
        return browser.get(url);
},

/**
 * Have to wait until the page loads; based on visibility of page header
 * @returns {Promise<void>}
 */
waitForPage: () => {
    return browser.wait(EC.visibilityOf(header));
},

/**
 * Returns global search component.
 * Search component is a separate element that
 * encapsulates the logic and can be put in a separate class.
 * @returns {GlobalSearchComponent}
 */
getGlobalSearchComponent: () => {
    browser.wait(EC.visibilityOf(search));
    // but first we need to make sure that it is visible - wait for visible
    return GlobalSearchComponent(search);
},
};