const FirefoxProfile = require('firefox-profile');
const fp = new FirefoxProfile();

/*export const locaLo = async () => {
    const fp = new FirefoxProfile();
    fp.setPreference('dddd', 'dfdd');
    await console.log('ddd');
    const resp = await fp.addExtension(err, 'path')
}*/

export function lol () {
    fp.addExtensions(["./test/extensions/firebug-1.12.4-fx.xpi"], function () {
        fp.encoded(function (err, zippedProfile) {
            if (err) {
                console.error("oops, an error occured:", err);
                return;
            }
            let caps = {
                "moz:firefoxOptions": {
                    profile: zippedProfile,
                },
                selenoidOptions: {
                    enableVNC: true,
                    enableVideo: false,
                    enableLog: true,
                    browserName: 'firefox',
                    browserVersion: '101.0',
                }
            };
            return caps;
        });
    });
}


