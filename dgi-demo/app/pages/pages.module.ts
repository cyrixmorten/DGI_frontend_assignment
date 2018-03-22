import * as angular from "angular";

import "@uirouter/angularjs";

export const PAGES_MODULE = 'pages.module';

angular.module(PAGES_MODULE, ['ui.router'])
    .config(
        ['$stateProvider', '$urlRouterProvider', '$locationProvider',
            ($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider, $locationProvider: ng.ILocationProvider) => {

                // remove the 1.6.* default '!' prefix
                $locationProvider.hashPrefix('');

                // Comment out the line below to run the app
                // without HTML5 mode (will use hashes in routes)
                $locationProvider.html5Mode(true);

                let rootState = {
                    name: 'root',
                    url: '/',
                    template: `root state`
                };

                $stateProvider.state(rootState);

                $urlRouterProvider.otherwise(($injector) => {
                    $injector.get('$state').go(rootState);
                });
            }]);