import { KSAiTable } from "./ai.js";

export const initShowTable = async (cfg) => {
    // debugger;
    const table = new KSAiTable(cfg);
    await table.initShowTable();   // ✅ THIS is missing
    return table;
};