angular.module('kityminderEditor')
    .directive('saveBtn', function() {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/saveButton/saveBtn.html',
            scope: {
                minder: '='
            },
            replace: true,
            link: function (scope) {
                scope.saveJson=saveJson;
                function saveJson() {
                    
                }
            }
        }
    });