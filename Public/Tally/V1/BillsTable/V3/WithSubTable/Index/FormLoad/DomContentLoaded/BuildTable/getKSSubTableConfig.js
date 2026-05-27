import { formSearchParamsFunc } from "./formSearchParamsFunc.js";

const getKSSubTableConfig = async ({ tableName }) => {
    const config = await fetch("configForSubTable.json");
    // debugger;
    const configJson = await config.json();

    const pkFromParams = formSearchParamsFunc({ inKeyName: "pk" });

    // configJson.endPoints.read = `/Api/V4/${tableName}/ShowAll`;
    // configJson.endPoints.findFromParams = configJson.endPoints.findFromParams.replace("{pk}", pkFromParams);

    return configJson;
};

export default getKSSubTableConfig;