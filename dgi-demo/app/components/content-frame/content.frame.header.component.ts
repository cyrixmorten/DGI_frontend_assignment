import {TransitionHistoryService} from "../transition-history/transition.history.service";

export class ContentFrameHeaderComponent implements ng.IComponentOptions {

    public static NAME = 'contentFrameHeader';

    public bindings: any;
    public controller: any;
    public template: string;

    constructor() {
        this.bindings = {
            frameTitle: '@',
            hideBackButton: '<'
        };
        this.template = `
        <md-toolbar class="md-accent md-hue-2">
            <div class="md-toolbar-tools">
                <md-button
                    ng-if="!$ctrl.hideBackButton" 
                    class="md-icon-button" aria-label="Back" ng-click="$ctrl.back()">
                    <md-icon md-svg-icon="arrow-left"></md-icon>
                </md-button>
        
                <h2 flex md-truncate style="color: white;">{{$ctrl.frameTitle}}</h2>
        
                
            </div>
        </md-toolbar>
        `;
        this.controller = ContentFrameHeaderController;
    }

}


export class ContentFrameHeaderController {


    static $inject: string[] = [TransitionHistoryService.NAME];

    constructor( private transitionHistory: TransitionHistoryService) {}

    back() {
        this.transitionHistory.goBack();
    }
}

