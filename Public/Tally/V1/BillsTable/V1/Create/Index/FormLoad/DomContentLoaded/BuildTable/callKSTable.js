import { initCreate } from "/KSTableAi/V44/entry.js";

export const callKSTable = async (config) => {
    if (window?.KSTable) {
        console.log("loaded from cdn");

        return window.KSTable(config);
    };

    return initCreate(config);
};