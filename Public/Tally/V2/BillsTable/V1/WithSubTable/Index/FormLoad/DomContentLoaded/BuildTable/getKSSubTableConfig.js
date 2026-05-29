import { formSearchParamsFunc } from "./formSearchParamsFunc.js";

const getKSSubTableConfig = async ({ tableName }) => {
    const config = await fetch("configForSubTable.json");
    // debugger;
    const configJson = await config.json();

    const pkFromParams = formSearchParamsFunc({ inKeyName: "pk" });

    const findColumn = configJson.columnsConfig.find(element => {
        return element.columnName === "ParentPk";
    });
    // debugger;
    findColumn.defaultValue = pkFromParams;

    return configJson;
};

export default getKSSubTableConfig;