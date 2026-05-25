import getUrlJson from './getUrl.json' with {type: 'json'};

let deleteFunc = async ({ inQuery }) => {
    let jVarLocalGetEndPoint = getUrlJson.deleteEndPoint;

    let response = await fetch(jVarLocalGetEndPoint, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(inQuery)
    });

    return await response;
};

export { deleteFunc };

