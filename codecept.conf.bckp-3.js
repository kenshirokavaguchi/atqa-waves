require('ts-node/register');
// const ProfileHelper = require('./profileHelper');
// const profile = new ProfileHelper;
const FirefoxProfile = require("firefox-profile");
const myProfile = new FirefoxProfile();


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
            desiredCapabilities: (() => { myProfile.addExtension('a',
                function (){
                    myProfile.setPreference("browser.newtab.url", "http://saadtazi.com");
                    myProfile.encoded(function (err, encodedProfile){
                        if (err) {
                            console.error("oops, an error occured:", err);
                        }
                         let caps = {
                            selenoidOptions: {
                                enableVNC: true,
                                enableVideo: false,
                                enableLog: true,
                                browserName: 'firefox',
                                browserVersion: '101.0',
                            },
                            caps: {
                                prof: encodedProfile
                            }
                        }
                        return caps;
                    })
                })
            }),
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
