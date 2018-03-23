import * as angular from "angular";
import "@uirouter/angularjs";
import {DefaultStateNameConstant, TransitionHistoryService} from "./transition.history.service";

export const TRANSITION_HISTORY_COMPONENT = 'transition.history';

angular.module(TRANSITION_HISTORY_COMPONENT, ['ui.router'])
    .service(TransitionHistoryService.NAME, TransitionHistoryService)
    .run(['$transitions',TransitionHistoryService.NAME, ($transitions, transitionHistory: TransitionHistoryService) => {
        $transitions.onSuccess({}, (trans) => {
            transitionHistory.addPrevState(trans.from());
        });
    }])
    // TODO: If this module is ever shared, DefaultStateNameConstant should be configurable by consumer
    .constant(DefaultStateNameConstant, 'root.front');