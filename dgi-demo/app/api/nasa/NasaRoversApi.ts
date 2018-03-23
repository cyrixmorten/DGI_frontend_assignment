import {RoverPicture} from "./NasaRovers";
import * as _ from "lodash";

export class NasaRoversApi {

    static NAME = 'nasaRoversApi';

    static $inject: string[] = ['$http'];

    constructor(private $http) {}

    public async query(rover: string, page: number): Promise<RoverPicture[]> {
        let httpRequest: ng.IRequestConfig = {
            method: 'GET',
            url: `https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos`,
            params: {
                sol: '1000',
                api_key: 'DEMO_KEY',
                page: page
                // camera: ''
            },
        };



        // fake it - take first 10
        return _.take(require('../../../data/nasa.json').photos, 10);

        // let response = await this.$http(httpRequest);
        // return response.data.photos;
    }

}