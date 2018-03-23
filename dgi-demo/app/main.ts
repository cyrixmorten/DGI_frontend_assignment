import * as angular from 'angular';

import {SETUP_MODULE} from "./setup/setup.module";
import {API_MODULE} from "./api/api.module";

import "./main.scss";

if (process.env.NODE_ENV !== 'production') {
  // To make webpack re-compile on changes in index
  require('../index.html');
}

import {PAGES_MODULE} from "./pages/pages.module";

angular.module('DGI-NASA', [
  SETUP_MODULE,
  API_MODULE,
  PAGES_MODULE
]);
