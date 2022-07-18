import { ClockUnit } from "../utils/clockUnit";
const clockUnit = new ClockUnit();

// import { readFile } from "fs-extra";
// const pathExt = readFile('/Users/a1/waves/atqa-waves/extension/keeper-wallet-2.8.1-chrome.crx');

Feature('Initial Test');

const { I } = inject();

Scenario('test something', async () => {
    //const a = 3;
    //await console.info(a);
    I.amOnPage('about:debugging#addons');
    I.waitForElement(locate('span').withText('Extensions'), clockUnit.SECONDS * 30);
    I.click(locate('span').withText('Extensions'));
    // I.refreshPage();
    // I.see('Войти');
    I.wait(clockUnit.MINUTES * 5);
});
