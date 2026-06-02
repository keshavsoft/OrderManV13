import { clickFuncToRun } from "./clickFunc.js";

const funcToRun = () => {
    const htmlElement = document.getElementById('CreateHtmlId');

    htmlElement.addEventListener('click', clickFuncToRun);
};

export { funcToRun };
