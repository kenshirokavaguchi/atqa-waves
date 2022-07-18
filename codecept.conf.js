require('ts-node/register');
// const fs = require('fs-extra')
//const FirefoxProfile = require('firefox-profile');
// const extPath = fs.readFileSync('/Users/a1/waves/atqa-waves/extension/keeper-wallet-2.8.1-chrome.crx', {encoding: "base64"});
//const fp = new FirefoxProfile();

exports.config = {
    name: 'waves',
    output: 'output',
    helpers: {
        WebDriver: {
            host: 'localhost',
            protocol: 'http',
            port: 4444,
            restart: false,
            keepCookies: false,
            keepBrowserState: false,
            url: 'https://localhost/',
            browser: 'firefox',
            // services: ['firefox-profile'],
            //services: [
            //    ['firefox-profile', {
            //        extensions: [
            //            '/tmp/keeper-wallet-2.8.1-firefox.xpi'
            //        ],
            //        'xpinstall.signatures.required': false
            //    }]
            //],
            desiredCapabilities: {
                // 'moz:firefoxOptions': {},
                //'goog:chromeOptions': {
                //    args: [ "--load-extension=/ext/tmp/chrome" ],
                //},
                //operaOptions: {
                //    args: [ "--load-extension=/home/selenium/opera" ]
                //},
                selenoidOptions: {
                    enableVNC: true,
                    enableVideo: false,
                    enableLog: true,
                    browserName: 'firefox',
                    browserVersion: '101.0',
                    //operaOptions: {
                        // binary: "/usr/bin/opera"
                         // args: [ "--load-extension=/ext/tmp/chrome" ]
                    //}
                    // args: [ "--load-extension=/Users/a1/waves/atqa-waves/extension/chrome" ]
                }
            },
        }
    },
    jest: {},
    bootstrap: null,
    teardown: null,
    tests: './tests/*.Test.ts',
    gherkin: {
        features: './*/features/**/*.feature',
        steps: './*/*steps/**/*.*s',
    },
    plugins: {
        wdio: {
            enabled: true,
                services: ['firefox-profile'],
                extensions: ['/tmp/keeper-wallet-2.8.1-firefox.xpi'],
                // extensions: ['/tmp/keeper-wallet-2.8.1-firefox.xpi'],
            //        extensions: ['/tmp/keeper-wallet-2.8.1-firefox.xpi'],
        //        // firefoxProfile: { 'browser.startup.homepage': 'https://webdriver.io' }
        //        //firefox_profile: {
                'xpinstall.signatures.required': false
            //}
        },
        screenshotOnFail: {
            enabled: true,
        },
        allure: {
            enabled: true,
        },
    },
};
