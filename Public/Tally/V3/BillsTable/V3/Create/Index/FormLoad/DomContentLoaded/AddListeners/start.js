import { funcToRun as CreateHtmlId } from "./CreateHtmlId/start.js";
import { funcToRun as addItemHtmlId } from "./AddItemHtmlId/start.js";
import { funcToRun as toTallyId } from "./toTallyId/start.js";

const hookAllListeners = () => {
    CreateHtmlId();
    addItemHtmlId();
    toTallyId();
};

export { hookAllListeners };