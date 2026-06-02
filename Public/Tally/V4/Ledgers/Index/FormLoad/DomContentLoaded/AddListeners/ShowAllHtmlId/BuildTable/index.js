import { initTableWithFooter, initShowTable } from "/KSTableAi/V4/entry.js";

const startFunc = async () => {
    const config = await fetch("config.json");
    // debugger;
    const configJson = await config.json();

    if (window.KSTable) {
        console.log("table loaded from cdn");

        await window.KSTable.initTableWithFooter(configJson);
    } else {
        await initTableWithFooter(configJson);
    };
};

export default startFunc;