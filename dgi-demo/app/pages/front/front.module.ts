import * as angular from "angular";
import "@uirouter/angularjs";
import {FrontPageComponent} from "./front.component";
import {CONTENT_FRAME_COMPONENT} from "../../components/content-frame/content.frame.module";

export const FRONT_PAGE_MODULE = 'page.front';

angular.module(FRONT_PAGE_MODULE, [CONTENT_FRAME_COMPONENT, 'ngAnimate', 'ui.router'])
.component(FrontPageComponent.NAME, new FrontPageComponent())
.config(['$stateProvider', ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider.state({
            name: 'root.front',
            url: '/',
            views: {
                'content': {
                    component: FrontPageComponent.NAME
                }
            }
        });
}]);
