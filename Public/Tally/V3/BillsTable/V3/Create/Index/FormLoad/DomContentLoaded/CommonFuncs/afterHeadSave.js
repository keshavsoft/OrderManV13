import { initCreate, initShowTable, initTableWithFooter } from "/KSTableAi/V6/entry.js";
import onSuccessFunc from "./onSuccess.js";

const afterHeadSave = async (inPk) => {
    const config = await fetch("Index/Configs/AddItem/config.json");
    const configJson = await config.json();

    configJson.endPoints.findFromParams = configJson.endPoints.findFromParams.replace("{pk}", inPk);
    configJson.callbacks.vertical.onSuccess = onSuccessFunc;

    // await initCreate(configJson);

    if (window.KSTable) {
        console.log("table loaded from cdn");

        await window.KSTable.initCreate(configJson);
    } else {
        await initCreate(configJson);
    };

    const configForSubTable = await fetch("Index/Configs/AddItem/configForSubTable.json");
    const configForSubTableJson = await configForSubTable.json();

    const findColumn = configForSubTableJson.columnsConfig.find(element => {
        return element.columnName === "ParentPk";
    });

    findColumn.defaultValue = inPk.toString();
    configForSubTableJson.endPoints.read += inPk.toString();

    if (window.KSTable) {
        console.log("table loaded from cdn");

        await window.KSTable.initTableWithFooter(configForSubTableJson);
    } else {
        await initTableWithFooter(configForSubTableJson);
    };
    // await initTableWithFooter(configForSubTableJson);
};

export default afterHeadSave;