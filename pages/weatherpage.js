const EC = protractor.ExpectedConditions;

/**
 * page element
 */
const location = element(by.className('today_nowcard-location'));

module.exports = {
        /**
         * Have to wait until the page loads
         * @returns {Promise<void>}
         */
    waitForPage: () => {
        return browser.wait(EC.visibilityOf(location));
    },
/**
 * Will return text of location if the element is visible
 * @returns {Promise<string>}
 */
    getLocation: () => {
        browser.wait(EC.visibilityOf(location));
        return location.getText();
    },
};