import { getKSTableConfig } from "./getKSTableConfig.js";
import { callKSTable } from "./callKSTable.js";

const startFunc = async () => {
    const config = await getKSTableConfig({
        tableName: "LedgerNames"
    });

    await callKSTable(config);
};

export default startFunc;