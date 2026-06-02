// createFooterCell.js

import { createFooterInput } from "./createFooterInput.js";

const createFooterCell = ({ key, onChangeFunc, showDataList, inColumnsConfig,
    inDefaultValue, inTdClass, inAllowOnChange = false, inOnChangeType }) => {

    let localChangeFunc;

    const td = document.createElement("td");
    td.className = inTdClass;

    if (inAllowOnChange) {
        localChangeFunc = onChangeFunc;
    };

    const input = createFooterInput({
        key, onChangeFunc: localChangeFunc,
        showDataList, inColumnsConfig, inDefaultValue, inOnChangeType
    });
    // debugger;
    td.appendChild(input);

    return td;
};

export { createFooterCell };