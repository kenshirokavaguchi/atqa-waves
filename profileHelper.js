const FirefoxProfile = require('firefox-profile');
const Promise = require('bluebird');

class ProfileHelper {

    setCaps (config) {

        this.profile = new FirefoxProfile()

        this.profile.setPreference('xpinstall.signatures.required', false)

        this.profile.updatePreferences()

        return new Promise((resolve) => {
            this.profile.addExtension(config, () => {
                return resolve(this.buildExtension())
            })
        })
    }

    buildExtension (profile) {
        return new Promise((resolve, reject) => {
            profile.encoded((err, zippedProfile) => {
                if (err) {
                    console.error(`Failed to encode Firefox profile: ${err}`)
                    return reject(err)
                }
                return resolve(zippedProfile)
            })
        })
    }

    getEncoded (zippedProfile){
        return this.buildExtension(zippedProfile)
            .then(this.setCaps())
    }
}

module.exports = ProfileHelper;
