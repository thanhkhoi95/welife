(function () {
    'use strict';

    angular.module('app', [
        'app.login',
        'app.layout',
        'app.homepage',

        'ui.router',
        'angular-jwt',
        'ngStorage',
        'ngAnimate',
        'ngSanitize',
        'ngplus',
        'app.auth',
        'blocks.exception',
        'blocks.logger',
        'blocks.router',
        'infinite-scroll'
    ]);

})();