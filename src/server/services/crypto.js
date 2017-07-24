(function () {

    var crypto = require('crypto');

    function genRandStr(stringLength) {
        return crypto.randomBytes(64)
            .toString('base64')
            .slice(0, stringLength)
            .replace(/\+/g, '0')
            .replace(/\//g, '0')
    }

    function genSalt() {
        return genRandStr(20);
    }

    function hashWithSalt(password, salt) {
        return crypto.pbkdf2Sync(password, salt, 1000, 128).toString('base64');
    }

    module.exports = {
        hashWithSalt: hashWithSalt,
        genSalt: genSalt,
        genRandStr: genRandStr
    };

})();