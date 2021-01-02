'use strict';
angular.module('menu').component('menu', {
    templateUrl: 'menu/menu.template.html',
    controller: ['Menu', function menuController(){}]
});


// .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
//     $scope.close = function () {
//         // Component lookup should always be available since we are not using `ng-if`
//         $mdSidenav('left').close()
//             .then(function () {
//                 $log.debug("close LEFT is done");
//             });

//     };
// })