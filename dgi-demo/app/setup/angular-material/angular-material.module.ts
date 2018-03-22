import * as angular from "angular";

import 'angular-material/angular-material.min.css';
import "angular-material";

export const SETUP_ANGULAR_MATERIAL = 'setup.angular.material';

const MATERIAL_DESIGN_ICONS_SVG = 'app/setup/angular-material/img/mdi.svg';

// https://material.angularjs.org/latest/Theming/03_configuring_a_theme
angular.module(SETUP_ANGULAR_MATERIAL, ['ngMaterial'])
    .config(['$mdThemingProvider', ($mdThemingProvider) => {
        $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('blue')
            .warnPalette('orange');
    }])
    .config(['$mdIconProvider', ($mdIconProvider) => {
        // https://materialdesignicons.com/getting-started
        $mdIconProvider
            .defaultIconSet(MATERIAL_DESIGN_ICONS_SVG)

        // Usage:
        //
        // Material Design Icon: https://materialdesignicons.com/
        // <md-icon md-svg-icon="android"></md-icon>
        //
        // Font Awesome: https://fontawesome.com/
        // <md-icon md-font-icon="fa fa-download"></md-icon>
        //
        // Schneider
        // <md-icon md-font-icon="S-icon S-icon-ups"></md-icon>

    }])
    .run(['$templateRequest', ($templateRequest) => {

        // Pre-fetch icons sources by URL and cache in the $templateCache...
        // subsequent $templateRequest calls will look there first.

        let urls = [MATERIAL_DESIGN_ICONS_SVG];

        angular.forEach(urls,  (url) => {
            $templateRequest(url);
        });

    }]);
