import {RoverPicture} from "./NasaRovers";

export class NasaRoversApi {

    static NAME = 'nasaRoversApi';

    static $inject: string[] = ['$http'];

    constructor(private $http) {}

    public async query(): Promise<RoverPicture[]> {
        let httpRequest: ng.IRequestConfig = {
            method: 'GET',
            url: `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos`,
            params: {
                sol: '1000',
                api_key: 'DEMO_KEY'
            },
        };

        let response = await this.$http(httpRequest);

        return response.data;
    }

}