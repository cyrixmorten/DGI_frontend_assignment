import {IState, IStateService} from "angular-ui-router";

export const DefaultStateNameConstant = 'defaultStateName';

export class TransitionHistoryService {

    public static NAME = 'transitionHistory';

    static $inject: string[] = ['$state', DefaultStateNameConstant];

    private prevStates: IState[] = [];
    private ignoreNext: boolean;

    constructor(private $state: IStateService, private defaultStateName: string) {
    }

    addPrevState(state: IState) {
        if (this.ignoreNext) {
            this.ignoreNext = false;
            return;
        }

        this.prevStates.push(state);
    }

    popBackStack() {
        return this.prevStates.pop();
    }


    goBack() {
        let target: any = this.popBackStack();

        // in case the target state is undefined or abstract, fallback to default state
        let resolveTarget = () => {
            if (!target || target.abstract) {
                return this.defaultStateName;
            }

            // ignoring the current state in the next addPrevState call
            this.ignoreNext = true;

            return target;
        };


        this.$state.go(resolveTarget());
    }


}