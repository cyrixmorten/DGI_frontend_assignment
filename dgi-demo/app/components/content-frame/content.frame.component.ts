export class ContentFrameComponent implements ng.IComponentOptions {

    public static NAME = 'contentFrame';

    public bindings: any;
    public controller: any;
    public template: string;
    public transclude = true;

    constructor() {
        this.bindings = {
            loading: '<',
            frameTitle: '@',
            hideBackButton: '<'
        };
        this.template = `
        <div layout="column">
            <div layout="column" layout-align="center center" flex="100" ng-show="$ctrl.loading" layout-padding>
                <md-progress-circular md-mode="indeterminate"></md-progress-circular>
            </div>
        

            <div ng-class="{'layout-padding': !$ctrl.renderMobile}" layout="row" layout-align="center center">
                <div flex="100" flex-gt-sm="75" flex-gt-lg="66">
        
                    <div ngfx-fade-in-down="!$ctrl.loading" flex>
        
                        <div ng-class="{'md-whiteframe-2dp': !$ctrl.renderMobile}">
                            <content-frame-header 
                                frame-title="{{$ctrl.frameTitle}}" 
                                hide-back-button="$ctrl.hideBackButton"></content-frame-header>
                            
                            <div ng-class="{'layout-padding': !$ctrl.renderMobile}">
                                <ng-transclude></ng-transclude>
                            </div>
                        </div>
        
                    </div>
        
                </div>
            </div>
        </div>
        `;
        this.controller = ContentFrameController;
    }
}

export class ContentFrameController {

    static $inject: string[] = ['$scope', '$mdMedia'];

    private renderMobile: boolean;

    constructor($scope, $mdMedia) {
        $scope.$watch(() => $mdMedia('gt-sm'), (largeScreen) => this.renderMobile = !largeScreen);
    }

}


