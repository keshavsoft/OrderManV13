import { getKSTableConfig } from "./getKSTableConfig.js";
import { callKSTable } from "./callKSTable.js";

import getKSSubTableConfig from "./getKSSubTableConfig.js";
import callKSSubTable from "./callKSSubTable.js";

const startFunc = async () => {
    const config = await getKSTableConfig({
        tableName: "LedgerNames"
    });

    await callKSTable(config);
    debugger;
    const configForSubTable = await getKSSubTableConfig({
        tableName: "SubTable"
    });

    await callKSSubTable(configForSubTable);
};

export default startFunc;