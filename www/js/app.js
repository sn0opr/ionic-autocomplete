// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'autocomplete.directive'])

.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            // Set the statusbar to use the default style, tweak this to
            // remove the status bar on iOS or change it to use white instead of dark colors.
            StatusBar.styleDefault();
        }
    });
})

.controller('MainCtrl', function ($scope) {
    $scope.items = [
        {display: 'Hello'},
        {display: 'Baha'},
        {display: 'Ala'},
        {display: 'Siwar'},
        {display: 'Monira'},
        {display: 'Samir'},
        {display: 'Spange Bob'},
        {display: 'Deneris Targariant'},
        {display: 'Ned Stark'}
    ];
    $scope.onSelect = function (item) {
        console.log('item', item);
    };
});
