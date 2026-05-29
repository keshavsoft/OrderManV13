import { formSearchParamsFunc } from "./formSearchParamsFunc.js";

const onSuccessFunc = async (res) => {
    const fromReponse = await res.json();
    console.log("fromReponse : ", fromReponse);
    // window.location.href = `../WithSubTable/index.html?pk=${fromReponse.pk}`;
    await afterHeadSave(fromReponse.pk);
};

const afterHeadSave = async (inPk) => {
    const config = await fetch("Index/Configs/AddItem/config.json");
    const configJson = await config.json();

    configJson.endPoints.findFromParams = configJson.endPoints.findFromParams.replace("{pk}", inPk);
    configJson.callbacks.vertical.onSuccess = onSuccessFunc;

    await initCreate(configJson);

    const configForSubTable = await fetch("Index/Configs/AddItem/configForSubTable.json");
    const configForSubTableJson = await configForSubTable.json();

    const findColumn = configForSubTableJson.columnsConfig.find(element => {
        return element.columnName === "ParentPk";
    });

    findColumn.defaultValue = pkFromParams;

    await initTableWithFooter(configForSubTableJson);
};

export const getKSTableConfig = async ({ tableName }) => {
    const config = await fetch("config.json");
    // debugger;
    const configJson = await config.json();

    const pkFromParams = formSearchParamsFunc({ inKeyName: "pk" });

    // configJson.tableName = tableName;

    configJson.endPoints.read = `/Api/V4/${tableName}/ShowAll`;
    // configJson.endPoints.filter = `/Api/V1/${tableName}/FilterColumns`;
    configJson.endPoints.findFromParams = configJson.endPoints.findFromParams.replace("{pk}", pkFromParams);

    configJson.callbacks.vertical.onSuccess = onSuccessFunc;
    // configJson.endPoints.dataListEndpoints.AccountNames = `/Api/V1/${tableName}/Distinct/AccountName`;
    // configJson.endPoints.dataListEndpoints.Dates = `/Api/V1/${tableName}/Distinct/Date`;

    return configJson;
};