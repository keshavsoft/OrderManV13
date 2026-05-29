import { clickFuncToRun } from "./clickFunc.js";

const funcToRun = () => {
    const htmlElement = document.getElementById('ShowAllHtmlId');

    htmlElement.addEventListener('click', clickFuncToRun);
};

export { funcToRun };
