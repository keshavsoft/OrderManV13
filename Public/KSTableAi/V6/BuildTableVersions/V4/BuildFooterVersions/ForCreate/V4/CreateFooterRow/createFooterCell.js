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

    const div = document.createElement("div");
    div.className = "calc-message";

    //     td.className = inTdClass;
    // <div class="calc-message">
    //     Rate calculated : 1500
    // </div>
    // debugger;
    td.appendChild(input);
    td.appendChild(div);

    return td;
};

export { createFooterCell };