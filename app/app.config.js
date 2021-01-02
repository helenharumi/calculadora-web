'use strict';
angular.module('calculadoraApp')
.config(['$routeProvider', 
    function config($routeProvider){
        $routeProvider.
            when('/index',{
                template: '<sh-main/>'
            }).
            otherwise('/index');
    }
]);