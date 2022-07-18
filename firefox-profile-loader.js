const Promise = require('bluebird');
const FirefoxProfile = require('firefox-profile');
const myProfile = new FirefoxProfile();

module.exports = {
    getEncoded
};

function getEncoded(profile) {
    return addExt(profile)
        .then(encode);
}

function addExt(path) {
    return new Promise((resolve, reject) => {
        myProfile.addExtensions([path], (error, profile) => error ? reject(error) : resolve(profile));
    })
}

function encode(profile) {
    return new Promise((resolve, reject) => {
        profile.encoded((error, profile) => error ? reject(error) : resolve(profile));
    });
}
