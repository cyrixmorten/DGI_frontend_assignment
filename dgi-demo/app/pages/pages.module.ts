import * as angular from "angular";

import "@uirouter/angularjs";
import {FRONT_PAGE_MODULE} from "./front/front.module";
import {ROVER_PAGE_MODULE} from "./rover/rover.module";

export const PAGES_MODULE = 'pages.module';

angular.module(PAGES_MODULE, [FRONT_PAGE_MODULE, ROVER_PAGE_MODULE, 'ui.router'])
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
                    abstract: true,
                    template: `<div layout="row" layout-align="center center">
                                    <div flex="75" flex-gt-sm="66" flex-gt-lg="50" layout-padding>
                                        <div ui-view="content" layout="column">
                                            <!-- content of pages goes here-->
                                        </div>
                                    </div>
                                </div>
                                `
                };

                $stateProvider.state(rootState);

                $urlRouterProvider.otherwise(($injector) => {
                    $injector.get('$state').go(rootState);
                });
            }]);