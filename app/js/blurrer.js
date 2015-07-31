// <custom-element> E
// <div custom-attribute> A
// <div class="custom-class-behaviour"> C
// <!-- custom-comment-behaviour --> M
// ng-class="{blurred: isDetailState()}
// $scope.isDetailState = function() {
//   return $state.is('cards.detail');
// };
angular.module("app").directive("blursIfStateIsDetail", function($state) {
  return {
    restrict: 'A',
    link: function(scope, element, attributes, controller) {
      scope.$on('$stateChangeSuccess', function() {
        element.toggleClass('blurred', $state.is('cards.detail'));
      });
    }
  };
});
