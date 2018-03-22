import * as angular from 'angular';
import 'angular-aria'
//https://docs.angularjs.org/guide/accessibility
export const SETUP_ARIA_MODULE = 'setup.aria';

angular.module(SETUP_ARIA_MODULE, ['ngAria'])
    .config(['$ariaProvider', ($ariaProvider: any): void => {

        $ariaProvider.config({
            bindRoleForClick: false,
            tabindex: false
        });

    }]);
