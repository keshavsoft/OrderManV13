import { initShowTable } from "/KSTableAi/V45/entry.js";

const callKSSubTable = async (config) => {
    if (window?.KSTable) {
        console.log("loaded from cdn");

        return window.KSTable(config);
    };

    return initShowTable(config);
};

export default callKSSubTable;