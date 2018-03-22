import * as angular from 'angular';
import {SETUP_ARIA_MODULE} from "./aria";
import {SETUP_ASYNC_AWAIT} from "./asyncawait";
import {SETUP_ANGULAR_MATERIAL} from "./angular-material/angular-material.module";

export const SETUP_MODULE = 'setup';

angular.module(SETUP_MODULE, [
    SETUP_ARIA_MODULE,
    SETUP_ASYNC_AWAIT,
    SETUP_ANGULAR_MATERIAL
]);




