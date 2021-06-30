const LoginPage = require('../pageobjects/login.page');
const SalesforceHomePage = require('../pageobjects/SalesforceHomePage.page');
const creds = require('../../config/credentials')

describe('Agents Login to Salesforce', () => {
    it('Agent should be able to login and see the expected view', async () => {
        
        await LoginPage.open();
        //await LoginPage.login('exp-b2b-bandits@tripadvisor.com.att.santoshdev', 'Test@2021');
        
        await LoginPage.login(creds.username,  creds.password);

        await expect($('span.itemTitle')).toBeExisting();
        const panelList =  await $$('ul li button span.itemTitle');
        await expect(panelList).toBeElementsArrayOfSize(9);

        panelList.forEach(element => {
            console.log('element.getText()'+element.getText());
        })

        await expect(panelList[0]).toHaveText('Plus Search');
        await expect(panelList[6]).toHaveText('Omni-Channel');

        await panelList[6].click() //to click OmniChannel-button

        await $('#slds-dropdown-trigger slds-dropdown-trigger_click').click;
        await browser.saveScreenshot('./screenshot.png');

    });
})