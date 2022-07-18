class MyHelper extends Helper {

    async accessWd() {
        const browser = this.helpers.WebDriver.browser;
    }
}

module.exports = MyHelper;
