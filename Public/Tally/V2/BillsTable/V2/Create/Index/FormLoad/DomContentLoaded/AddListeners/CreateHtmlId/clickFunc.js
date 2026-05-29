import buildTable from "./BuildTable/index.js";

const clickFuncToRun = () => {
    buildTable().then();
};

export { clickFuncToRun };