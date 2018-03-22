import * as angular from 'angular';

import {SETUP_MODULE} from "./setup/setup.module";
import {API_MODULE} from "./api/api.module";

import "./main.scss";

if (process.env.NODE_ENV !== 'production') {
  // To make webpack re-compile on changes in index
  require('../index.html');
}

import {NasaRoversApi} from "./api/nasa/NasaRoversApi";

angular.module('DGI-NASA', [
  SETUP_MODULE,
  API_MODULE
]).run([NasaRoversApi.NAME, async (NasaRoversApi: NasaRoversApi) => {
  let pictures = await NasaRoversApi.query();

  console.log('pictures: ', pictures);
}]);
