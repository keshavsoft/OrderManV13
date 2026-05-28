import buildTable from "./BuildTable/index.js";
import { buildHeader } from "./buildHeader.js";
import { hookAllListeners } from "./AddListeners/start.js";

export function startDomContentLoaded() {
    document.addEventListener("DOMContentLoaded", buildTable);

    buildHeader().then(formPromise => {
        hookAllListeners();
    });
};