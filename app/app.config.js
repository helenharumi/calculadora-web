'use strict';
angular
    .module('calculadoraApp')
    .config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/index', {
                    template: '<main><main/>'
                }).
                when('/imc', {
                    template: '<imc><imc/>'
                }).
                when('/reajustealuguel', {
                    template: '<reajustealuguel><reajustealuguel/>'
                }).
                otherwise('/index');
        }
    ]);