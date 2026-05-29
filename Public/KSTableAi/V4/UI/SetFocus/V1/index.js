import buildHeader from "../BuildTableVersions/V4/BuildHeaderVersions/V4/index.js";
import { buildBody } from "../BuildTableVersions/V4/BuildBodyVersions/V3/start.js";
import createForm from "../BuildSearchForm/V1/createForm.js";
import buildDataLists from "../BuildDataLists/V2/addToDom.js";

// import buildFooter from "../BuildTableVersions/V4/BuildFooterVersions/ForSummary/V8/CreateFooterRow/V3/start.js";

import buildFooter from "../BuildTableVersions/V4/BuildFooterVersions/ForCreate/V2/start.js";

import SearchFuncs from "../TableFirstRow/V3/SearchFuncs/V4/index.js";

import { buildFullUI } from "./compose/buildFullUI.js";

const startFunc = ({ inContainerEl }) => {
    const focusControl = inContainerEl.querySelector(".tableSearchClass ");

    focusControl?.focus();
};

export default startFunc;