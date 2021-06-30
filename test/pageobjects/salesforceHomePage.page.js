const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SalesforceHomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get whiteBoardButton() { return $('#scc_widget_White_Board_button') }
    get omniChannelButton() { return $('#scc_widget_servicePresence_button') }
}

module.exports = new SalesforceHomePage();
