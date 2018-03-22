import "angular-fx/src/js/angular-fx";

import * as angular from "angular";
import {ContentFrameComponent} from "./content.frame.component";
import {TRANSITION_HISTORY_COMPONENT} from "../transition-history/transition.history.module";
import {ContentFrameHeaderComponent} from "./content.frame.header.component";
import {SETUP_ANGULAR_MATERIAL} from "../../setup/angular-material/angular-material.module";

export const CONTENT_FRAME_COMPONENT = 'content-frame';

angular.module(CONTENT_FRAME_COMPONENT, [
    TRANSITION_HISTORY_COMPONENT,
    SETUP_ANGULAR_MATERIAL,
    '720kb.fx']
)
    .component(ContentFrameHeaderComponent.NAME, new ContentFrameHeaderComponent())
    .component(ContentFrameComponent.NAME, new ContentFrameComponent());





