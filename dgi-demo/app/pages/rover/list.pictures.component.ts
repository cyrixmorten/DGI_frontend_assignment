import * as ng from "angular";
import {NasaRoversApi} from "../../api/nasa/NasaRoversApi";
import {RoverCamera, RoverPicture} from "../../api/nasa/NasaRovers";
import * as _ from "lodash";

export class ListRoverPicturesComponent implements ng.IComponentOptions {

    public static NAME = 'listRoverPictures';

    public bindings: any;
    public controller: any;
    public template: string;

    constructor() {
        this.bindings = {
            $transition$: '<'
        };
        this.template = `
            <content-frame frame-title="{{$ctrl.roverName}}" loading="$ctrl.loadingFirstPage">
            
                <!-- Query/filter header-->
                <div layout="row" layout-padding layout-margin class="md-whiteframe-1dp">
                
                      <md-input-container>
                          <label>Page</label>
                          <md-select ng-model="$ctrl.page" class="md-no-underline">
                                <!-- Did not find any documentation on number of pages - showing 10-->
                                <md-option ng-repeat="page in [1,2,3,4,5,6,7,8,9,10]" ng-value="page">
                                  {{page}}
                                </md-option>
                          </md-select>
                      </md-input-container>
                      
                      <md-input-container style="max-width: 200px">
                        <label>Cameras</label>
                        <md-select ng-model="$ctrl.showCameras" multiple>
                            <md-option ng-value="camera" ng-repeat="camera in $ctrl.availableCameras">
                                {{camera.full_name}}&nbsp;({{$ctrl.countPicturesMatchingCamera(camera)}})
                            </md-option>
                        </md-select>
                      </md-input-container>
                      
                </div>
                
                <div layout-margin ng-style="{'visibility': $ctrl.performingQuery ? 'show' : 'hidden'}">
                    <md-progress-linear md-mode="indeterminate"></md-progress-linear>
                </div>
                
                <div ng-repeat="picture in $ctrl.roverPictures | cameras:$ctrl.showCameras" class="animate staggering">
                    <rover-picture ng-model="picture"></rover-picture>
                </div>
            </content-frame>
        `;
        this.controller = ListPicturesController;
    }


}

class ListPicturesController {

    static $inject: string[] = ['$scope', NasaRoversApi.NAME];

    public $transition$;
    public loadingFirstPage = true;
    public performingQuery;

    public page: number;
    public roverName: string;

    public showCameras: RoverCamera[];
    public availableCameras: RoverCamera[];
    public roverPictures: RoverPicture[] = [];

    constructor(private $scope, private NasaRoversApi: NasaRoversApi) {}

    async $onInit() {
        this.roverName = this.$transition$.params('to').name;
        this.page = 1;

        await this.loadPage(this.page);

        this.$scope.$watch(() => this.page, async (page) => {
            await this.loadPage(page);
        })
    }

    async loadPage(page: number) {
        this.performingQuery = true;
        try {
            this.roverPictures = await this.NasaRoversApi.query(this.roverName, page);

            this.availableCameras = !_.isEmpty(this.roverPictures) ? _.first(this.roverPictures).rover.cameras : [];

            if (this.loadingFirstPage) {
                this.showCameras = this.availableCameras;
            }

            this.performingQuery = false;
            this.loadingFirstPage = false;
        } catch(e) {
            console.error(e);
        }

    }


    countPicturesMatchingCamera(camera: RoverCamera) {
        return _.filter(this.roverPictures, (roverPicture) => roverPicture.camera.name === camera.name).length;
    }


}