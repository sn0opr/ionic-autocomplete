ionic-autocomplete
=================

Directive for text input autocomplete for Ionic framework

### Usage

Add the the attribute 'ionic-autocomplete' with passing an object that contains the items and a callback function for handling the select event to the input

```html
<input type="text" ng-model="search" ionic-autocomplet="{item: myItems, onSelect: doSomthing}" />
```
the callback is called when the user select an item from the autocomplete list
```javascript
.controller('MyCtrl', function($scope){
  $scope.doSomthing = function(item) {
    console.log('The selected item is: '+item);
  }
});
```
