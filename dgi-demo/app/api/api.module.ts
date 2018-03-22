import * as angular from 'angular';
import {NasaRoversApi} from "./nasa/NasaRoversApi";

export const API_MODULE = 'api';

angular.module(API_MODULE, [])
    .service(NasaRoversApi.NAME, NasaRoversApi);




