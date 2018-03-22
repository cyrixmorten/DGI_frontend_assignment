import * as angular from 'angular';
import {SETUP_ARIA_MODULE} from "./aria";
import {SETUP_ASYNC_AWAIT} from "./asyncawait";

export const SETUP_MODULE = 'setup';

angular.module(SETUP_MODULE, [
    SETUP_ARIA_MODULE,
    SETUP_ASYNC_AWAIT,
]);




