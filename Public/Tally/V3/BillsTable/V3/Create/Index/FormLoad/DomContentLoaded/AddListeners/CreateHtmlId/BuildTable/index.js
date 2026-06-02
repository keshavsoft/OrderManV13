import { initCreate, initShowTable } from "/KSTableAi/V5/entry.js";
import onSuccessFunc from "../../../CommonFuncs/onSuccess.js";

const startFunc = async () => {
    const config = await fetch("Index/Configs/create.json");
    // debugger;
    const configJson = await config.json();

    configJson.callbacks.vertical.onSuccess = onSuccessFunc;

    clearDom();

    if (window.KSTable) {
        console.log("table loaded from cdn");

        await window.KSTable.initCreate(configJson);
    } else {
        await initCreate(configJson);
    };

    // await initCreate(configJson);
};

const clearDom = () => {
    jFLocalToInputkSTableContainer("");
    jFLocalToInputkSSubTableContainer("");
};

let jFLocalToInputkSTableContainer = (inValue) => {
    let jVarLocalHtmlId = 'kSTableContainer';
    let jVarLocalkSTableContainer = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalkSTableContainer === null === false) {
        jVarLocalkSTableContainer.innerHTML = inValue;
    };
};

let jFLocalToInputkSSubTableContainer = (inValue) => {
    let jVarLocalHtmlId = 'kSSubTableContainer';
    let jVarLocalkSSubTableContainer = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalkSSubTableContainer === null === false) {
        jVarLocalkSSubTableContainer.innerHTML = inValue;
    };
};

export default startFunc;