const EC = protractor.ExpectedConditions;

/**
 * will select input component and insert the text
 */

const results = element(by.repeater('item in results'));

/** Component of HomePage
 * @param root - element which is based on component
 * @returns {{setText: (function(*=)), pickResult: (function(*=))}}
 */

module.exports = (root) => {
    return {

            /**
             * Will select input component and insert the text
             * @param text
             * @returns {Promise<void>}
             */

        setText :(text) => {
            return root.click().sendKeys(text);
        },

    /**
     * Will wait until the required element appears in the dropdown list
     * and pick it.
     * @param match - text of the item to be selected in the selector
     * @returns {Promise<void>}
     */

        pickResult: (match) => {
            browser.wait(EC.textToBePresentInElement(results, match));
            return element.all(by.repeater('item in results'))
                .filter((element) => {
                    return element.getText().then((text) => text === match);
                })
                .first()
                .click();
        },
    };
};