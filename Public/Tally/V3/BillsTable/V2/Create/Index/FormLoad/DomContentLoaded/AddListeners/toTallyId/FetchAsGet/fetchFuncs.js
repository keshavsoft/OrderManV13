import { formSearchParamsFunc } from "./formSearchParamsFunc.js";
import getUrlJson from './getUrl.json' with {type: 'json'};

let StartFunc = async () => {
    // const pkToPost = formSearchParamsFunc({ inKeyName: "pk" });
    const pkToPost = document.getElementById("htmlId").innerHTML;

    let jVarLocalGetEndPoint = `${getUrlJson.GetEndPoint}/${pkToPost}`;

    let response = await fetch(jVarLocalGetEndPoint);

    return await response;
};

export { StartFunc };

