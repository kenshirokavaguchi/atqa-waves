require('ts-node/register');
const { path } = require('path');
const { firefoxProfileLoader } = require('./firefox-profile-loader');

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
            desiredCapabilities: (() => { firefoxProfileLoader
                .getEncoded({
                    profileDirectory: path.resolve(__dirname, '../firefox-profile'),
                    destinationDirectory: path.resolve(__dirname, '../../tmp/firefox-profile')
                })
                .then(encodedProfile => {
                    const capabilities = {
                        'moz:firefoxOptions': {
                            profile: encodedProfile,
                        }
                    };
                    return [capabilities];
                })})
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
        //wdio: {
        //    enabled: true,
        //        services: ['firefox-profile'],
        //        extensions: ['/tmp/keeper-wallet-2.8.1-firefox.xpi'],
        //        // firefoxProfile: { 'browser.startup.homepage': 'https://webdriver.io' }
        //        //firefox_profile: {
        //        'xpinstall.signatures.required': false
        //}
        //},
        screenshotOnFail: {
            enabled: true,
        },
        allure: {
            enabled: true,
        },
    },
};
