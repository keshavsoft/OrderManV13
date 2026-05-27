// import { startFunc as createHandleSave } from "./CreateHandleSave/start.js";
// import { startFunc as createHandleOnChange } from "./CreateHandleOnChange/start.js";

import { startFunc as createFooter } from "./CreateFooter/start.js";
import { appendFooter } from "./DomManipulation/appendFooter.js";

const buildFooter = ({ inVisibleColumnsConfig, inDefaultRow, keys,
    inTableFooter, inShowDataList
}) => {

    const localVisibleColumns = inVisibleColumnsConfig

    // const localHandleSave =
    //     createHandleSave(inOptions);
    // // debugger;
    // const localHandleOnChange = createHandleOnChange({
    //     inDataStore: inOptions.inDataStore,
    //     inColumnsConfig: inOptions.inColumnsConfig,
    //     inToSaveRow: inOptions.inToSaveRow
    // });

    const localTr = createFooter({
        inVisibleColumnsConfig: localVisibleColumns,
        inDefaultRow, inShowDataList, keys
    });

    inTableFooter.appendChild(localTr);

    // appendFooter({
    //     inDom,
    //     inContainerEl: inOptions.inContainerEl,
    //     inTr: localTr
    // });
};

export default buildFooter;