'use strict';
angular
    .module('calculadoraApp')
    .config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/index', {
                    template: '<main><main/>'
                }).
                otherwise('/index');
        }
    ]);