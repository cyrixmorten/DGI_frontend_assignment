import * as angular from "angular";
import "@uirouter/angularjs";

export const ROVER_PAGE_MODULE = 'page.rover';

angular.module(ROVER_PAGE_MODULE, ['ui.router'])
.config(['$stateProvider', ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider.state({
            name: 'root.rover',
            url: '/rover/{name}',
            views: {
                'content': {
                    template: `rover`
                }
            }
        });
}]);
