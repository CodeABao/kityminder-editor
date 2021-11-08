angular.module('kityminderEditor')
    .directive('openBtn', function() {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/openButton/openBtn.html',
            scope: {
                minder: '='
            },
            replace: true,
            link: function (scope) {
                scope.openJson=openJson;
                function openJson() {
                    
                }
            }
        }
    });