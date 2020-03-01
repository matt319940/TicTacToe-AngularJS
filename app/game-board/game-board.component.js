'use strict'

angular.
    module('gameBoard').
    component('gameBoard', {
        templateUrl: 'game-board/game-board.template.html',
        controller: function game($scope) {
            //Global Variables
            var counter = 0;
            var arr = ["*", "*", "*",
                "*", "*", "*",
                "*", "*", "*"];

            $scope.getId = function(id) {
                // console.log(id);
                
                // Local Variables
                var text = document.getElementById(id).innerText;
                var blah = document.getElementById(id);
                // "X" and "O" logic
                if (counter % 2 == 0 && text == '*') {
                    blah.innerText = 'X';
                    arr[parseInt(id)] = 'X';
                    counter++;
                }
                else if (text == '*') {
                    blah.innerText = 'O';
                    arr[parseInt(id)] = 'O';
                    counter++;
                }
                $scope.checkIfWon(arr);
                $scope.checkIfTied(arr);                
            };

            $scope.checkIfWon = function(arr) {
                if (arr[0] == arr[1] && arr[1] == arr[2] && arr[0] != "*") {
                    alert(arr[0] + " Won!");
                    location.reload();
                }
                else if (arr[3] == arr[4] && arr[4] == arr[5] && arr[3] != "*") {
                    alert(arr[3] + " Won!");
                    location.reload();
                }
                else if (arr[6] == arr[7] && arr[7] == arr[8] && arr[6] != "*") {
                    alert(arr[6] + " Won!");
                    location.reload();
                }
                else if (arr[0] == arr[3] && arr[3] == arr[6] && arr[0] != "*") {
                    alert(arr[0] + " Won!");
                    location.reload();
                }
                else if (arr[1] == arr[4] && arr[4] == arr[7] && arr[1] != "*") {
                    alert(arr[1] + " Won!");
                    location.reload();
                }
                else if (arr[2] == arr[5] && arr[5] == arr[8] && arr[2] != "*") {
                    alert(arr[2] + " Won!");
                    location.reload();
                }
                else if (arr[0] == arr[4] && arr[4] == arr[8] && arr[0] != "*") {
                    alert(arr[0] + " Won!");
                    location.reload();
                }
                else if (arr[6] == arr[4] && arr[4] == arr[2] && arr[6] != "*") {
                    alert(arr[6] + " Won!");
                    location.reload();
                }
            };

            $scope.checkIfTied = function(arr) {
                var tie = 0;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i] == "*")
                        tie++;
                }
                if (tie == 0) {
                    alert("Tie!");
                    location.reload();
                }
            };


        }
    });