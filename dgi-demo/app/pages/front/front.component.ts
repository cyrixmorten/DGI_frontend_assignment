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
            <content-frame frame-title="Select rover" hide-back-button="true">
                <div layout="row" layout-align="center center" layout-wrap layout-padding>
                    <div ng-repeat="name in rovers" class="animate staggering"> 
                        <md-button 
                            style="min-width: 150px"
                            class="md-raised"
                            ui-sref="root.rover({name: name})">{{name}}</md-button>
                    </div>
                </div>
            </content-frame>
        `;
        this.controller = ['$scope', ($scope) => {
            $scope.rovers = ['curiosity', 'opportunity', 'spirit']
        }]
    }

}