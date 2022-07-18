const Promise = require('bluebird');
const FirefoxProfile = require('firefox-profile');

module.exports = {
    getEncoded
};

function getEncoded({ profileDirectory, destinationDirectory }) {
    return copy({ profileDirectory, destinationDirectory })
        .then(encode);
}

function copy({ profileDirectory, destinationDirectory }) {
    return new Promise((resolve, reject) => {
        FirefoxProfile.copy({
            profileDirectory,
            destinationDirectory
        }, (error, profile) => error ? reject(error) : resolve(profile));
    });
}

function encode(profile) {
    return new Promise((resolve, reject) => {
        profile.encoded((error, profile) => error ? reject(error) : resolve(profile));
    });
}
