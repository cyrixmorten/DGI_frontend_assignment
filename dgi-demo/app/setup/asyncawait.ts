import * as angular from 'angular';
export const SETUP_ASYNC_AWAIT = 'setup.async.await';

// http://debuggerdotbreak.judahgabriel.com/2017/04/24/making-typescript-asyncawait-play-nice-with-angularjs-1-x/
angular.module(SETUP_ASYNC_AWAIT, [])
    .run(['$q', ($q) => {
        window["Promise"] = $q;
    }]);

