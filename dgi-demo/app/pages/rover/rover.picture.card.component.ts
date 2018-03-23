import * as ng from "angular";
import {Rover, RoverCamera, RoverPicture} from "../../api/nasa/NasaRovers";
import {NasaRoversApi} from "../../api/nasa/NasaRoversApi";

export class RoverPictureCardComponent implements ng.IComponentOptions {

    public static NAME = 'roverPicture';

    public bindings: any;
    public controller: any;
    public template: string;

    constructor() {
        this.bindings = {
            ngModel: '<'
        };
        this.template = `
          <md-card>
            <md-card-title>
              <md-card-title-text>
                <span class="md-headline">{{$ctrl.ngModel.camera.name}}</span>
                <span class="md-subhead">{{$ctrl.ngModel.earth_date}}</span>
              </md-card-title-text>
              <md-card-title-media>
                <img class="md-media-lg card-media" ng-src="{{$ctrl.$sce.trustAsResourceUrl($ctrl.ngModel.img_src)}}">
                
                </img>
              </md-card-title-media>
            </md-card-title>
          </md-card>
        `;
        this.controller =  RoverPictureCardController;
    }


}

class RoverPictureCardController {

    static $inject: string[] = ['$sce'];

    private ngModel: RoverPicture;

    constructor(private $sce) {};

    $onInit() {
    }
}

