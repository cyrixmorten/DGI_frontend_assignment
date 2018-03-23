import * as angular from "angular";
import "angular-sanitize";
import "@uirouter/angularjs";
import {ListRoverPicturesComponent} from "./list.pictures.component";
import {API_MODULE} from "../../api/api.module";
import {RoverPictureCardComponent} from "./rover.picture.card.component";
import {RoverCamera, RoverPicture} from "../../api/nasa/NasaRovers";
import * as _ from "lodash";

export const ROVER_PAGE_MODULE = 'page.rover';

export const roverPageState = {
    name: 'root.rover',
    url: '/rover/{name}',
    views: {
        'content': {
            component: ListRoverPicturesComponent.NAME
        }
    }
};

angular.module(ROVER_PAGE_MODULE, [API_MODULE, 'ngSanitize', 'ui.router'])
.component(ListRoverPicturesComponent.NAME, new ListRoverPicturesComponent())
.component(RoverPictureCardComponent.NAME, new RoverPictureCardComponent())
.filter('cameras', () => {
    return (roverPictures: RoverPicture[], cameras: RoverCamera[]) => {

        let cameraNames = _.map(cameras, (camera) => camera.name);

        return _.filter(roverPictures, (roverPicture) => {
            return _.includes(cameraNames, roverPicture.camera.name);
        });
    };
})
.config(['$stateProvider', ($stateProvider: ng.ui.IStateProvider) => {
    $stateProvider.state(roverPageState);
}]);
