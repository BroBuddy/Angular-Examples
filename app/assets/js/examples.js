
// example_01

// n/a

// example_02

var myCtrl = angular.module('example_02', []);
myCtrl.controller('myCtrl', function($scope) {
    $scope.firstName = 'Bro';
    $scope.lastName = 'Buddy';
});

// example_03

var myCtrl = angular.module('example_03', []);
myCtrl.controller('myCtrl', function($scope) {
    $scope.firstName = 'Bro';

    $scope.$watch('lastName', function(newValue) {
        console.log('new value is ' + newValue);
    });

    setTimeout(function() {
        $scope.lastName = 'Buddy';
        $scope.$apply();
    }, 2000);
});

// example_04

var myCtrl = angular.module('example_04', []);
myCtrl.controller('myCtrl', function($scope) {
    $scope.names = ['Bro', 'T-Dog', 'Molito', 'Boris'];
});

// example_05

var myCtrl = angular.module('example_05', []);
myCtrl.controller('myCtrl', function($scope) {
    $scope.names = ['Bro', 'T-Dog', 'Molito', 'Boris'];

    $scope.addName = function() {
        $scope.names.push($scope.name);
        $scope.name = '';
    };
});

// example_06

var myCtrl = angular.module('example_06', []);
myCtrl.controller('myCtrl', function($scope) {
    $scope.names = ['Bro', 'T-Dog', 'Molito', 'Boris'];

    $scope.addName = function() {
        $scope.names.push($scope.name);
        $scope.name = '';
    };
    $scope.removeName = function(name) {
        var i = $scope.names.indexOf(name);
        $scope.names.splice(i, 1);
    };
});

// example_07

var myCtrl = angular.module('example_07', []);
myCtrl.controller('myCtrl', function($scope) {
    $scope.countries = [
        {"name": "China", "population": "1359821000"},
        {"name": "India", "population": "1205625000"},
        {"name": "USA", "population": "312247000"}
    ];
});