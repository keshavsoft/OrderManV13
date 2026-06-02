// createFooterCell.js

// import { createFooterInput } from "./createFooterInput.js";
import createFooterInput from "./CreateFooterInput/start.js";

const createFooterCell = ({ key, onChangeFunc, showDataList, inColumnsConfig,
    inDefaultValue, inTdClass, inAllowOnChange = false, inOnChangeType,
    inOnKeyDown, inOnKeyDownType }) => {

    let localChangeFunc;

    const td = document.createElement("td");
    td.className = inTdClass;

    if (inAllowOnChange) {
        localChangeFunc = onChangeFunc;
    };

    const input = createFooterInput({
        key, onChangeFunc: localChangeFunc, inOnKeyDown, inOnKeyDownType,
        showDataList, inColumnsConfig, inDefaultValue, inOnChangeType
    });
    // debugger;
    td.appendChild(input);

    return td;
};

export { createFooterCell };