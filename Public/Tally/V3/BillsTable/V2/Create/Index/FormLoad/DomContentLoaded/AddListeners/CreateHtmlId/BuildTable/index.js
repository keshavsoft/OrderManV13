import { initCreate, initShowTable } from "/KSTableAi/V4/entry.js";
import onSuccessFunc from "../../../CommonFuncs/onSuccess.js";

const startFunc = async () => {
    const config = await fetch("Index/Configs/create.json");
    // debugger;
    const configJson = await config.json();

    configJson.callbacks.vertical.onSuccess = onSuccessFunc;

    if (window.KSTable) {
        console.log("table loaded from cdn");

        await window.KSTable.initCreate(configJson);
    } else {
        await initCreate(configJson);
    };

    // await initCreate(configJson);
};

export default startFunc;