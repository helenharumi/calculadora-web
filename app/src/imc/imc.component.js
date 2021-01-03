'use strict';
angular
    .module('calculadoraApp')
    .component('imc', {
        templateUrl: "/src/imc/imc.template.html",
        controller: function ($scope) {
            $scope.resultadoImc = "";
            $scope.resultado = "";
            $scope.exibir = true;

            $scope.calculaImc = function () {
                console.log($scope.nome);
                console.log($scope.altura);
                console.log($scope.peso);
                let calc_imc = ($scope.peso / ($scope.altura * $scope.altura)).toFixed(2);
                console.log(calc_imc);
                $scope.imprimirResultado(calc_imc);
            }
            $scope.imprimirResultado = function (imc) {
                $scope.resultado = $scope.nome + " seu imc é " + imc;
                if (imc < 18.5) {
                    $scope.resultadoImc = "baixo peso"
                } else if (imc >= 18.5 && imc <= 24.9) {
                    $scope.resultadoImc = "intervalo normal"
                } else if (imc >= 25 && imc <= 29.9) {
                    $scope.resultadoImc = "sobrepeso"
                } else if (imc >= 30 && imc <= 34.9) {
                    $scope.resultadoImc = "obesidade classe I"
                } else if (imc >= 35 && imc <= 39.9) {
                    $scope.resultadoImc = "obesidade classe II"
                } else if (imc >= 40) {
                    $scope.resultadoImc = "obesidade classe III"
                }
                $scope.exibir = false;
            }
            $scope.limpar = function (){
                delete $scope.nome;
                delete $scope.altura;
                delete $scope.peso;
                delete $scope.resultado;
                delete $scope.resultadoImc;
                $scope.exibir = true;
            }
        }
    }); 