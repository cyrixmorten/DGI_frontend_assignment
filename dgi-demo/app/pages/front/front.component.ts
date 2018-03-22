import * as ng from "angular";

export class FrontPageComponent implements ng.IComponentOptions {

    public static NAME = 'frontPage';

    public bindings: any;
    public controller: any;
    public template: string;

    constructor() {
        this.bindings = {
        };
        this.template = `
            <content-frame frame-title="Please select a rover" hide-back-button="true">
                <div layout="column" layout-align="start center">
                    <div layout="row" layout-wrap>
                        <div ng-repeat="name in rovers" class="animate staggering"> 
                            <md-button 
                                class="md-raised"
                                ui-sref="root.rover({name: name})">{{name}}</md-button>
                        </div>
                    </div>
                </div>
            </content-frame>
        `;
        this.controller = ['$scope', ($scope) => {
            $scope.rovers = ['curiosity', 'opportunity', 'spirit']
        }]
    }

}