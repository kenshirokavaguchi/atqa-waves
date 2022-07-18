require('ts-node/register');
// const ProfileHelper = require('./profileHelper');
// const profile = new ProfileHelper;
const FirefoxProfile = require("firefox-profile");
const myProfile = new FirefoxProfile();

const fooP = require("./newHelper");

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
            desiredCapabilities: ( () => new Promise(resolve => {
                console.log('test');
                resolve ('test');
            }))()
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
        screenshotOnFail: {
            enabled: true,
        },
        allure: {
            enabled: true,
        },
    },
};
