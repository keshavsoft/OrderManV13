import { initCreate, initShowTable } from "/KSTableAi/V4/entry.js";

const onSuccessFunc = async (res) => {
    const fromReponse = await res.json();
    console.log("fromReponse : ", fromReponse);

    document.getElementById("htmlId").innerHTML = fromReponse.pk;

    // window.location.href = `../WithSubTable/index.html?pk=${fromReponse.pk}`;
    await afterHeadSave(fromReponse.pk);
};

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

    findColumn.defaultValue = inPk;

    if (window.KSTable) {
        console.log("table loaded from cdn");

        await window.KSTable.initTableWithFooter(configForSubTableJson);
    } else {
        await initTableWithFooter(configForSubTableJson);
    };
    // await initTableWithFooter(configForSubTableJson);
};

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