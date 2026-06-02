import fetchAsPost from "./FetchAsPost/start.js";

let StartFunc = async ({ inResponse, inPk }) => {
    let jVarLocalResponse = await inResponse;

    if (jVarLocalResponse.status === 200) {
        const fromPost = await fetchAsPost({ inPk: inPk })
        console.log("a : ", fromPost, inPk);

        alert(fromPost);
    };
};

export { StartFunc };