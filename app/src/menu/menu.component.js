'use strict';
angular
    .module('calculadoraApp')
    .component('shMenu', {
        templateUrl: '/src/menu/menu.template.html',
        controller: function () { }
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