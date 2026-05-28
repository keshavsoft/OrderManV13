import { validateRow } from "./Utils/validateRow.js";
// import { afterMutation } from "../../../../afterMutation.js";
import { getFooterPayload } from "./getFooterPayload.js";
import { showErrors } from "./DomManipulation/showErrors.js";
import { clearErrors } from "./DomManipulation/clearErrors.js";
import { clearFooterInputs } from "./DomManipulation/clearFooterInputs.js";

const saveFooterRow = async ({
    inDataStore,
    inDom,
    inServices,
    inEndPoints,
    inContainerEl,
    inOptions,
    inColumnsConfig,
    inVisibleColumns,
    inShowActions,
    inShowSerial,
    inShowTable,
    inToSaveRow,
    tableOptions,
    inPayload
}) => {
    try {
        debugger
        await inServices.actions.create({
            inEndPoint: inEndPoints.create,
            payload: inPayload
        });
    } catch (err) {
        console.error(err);
        return;
    };

    // clearFooterInputs(tr);

    // await afterMutation({
    //     inServices,
    //     inEndPoints,
    //     inDataStore,
    //     inContainerEl,
    //     inDom,
    //     inOptions,
    //     focusFn: focusFooter,
    //     inVisibleColumns,
    //     inShowActions,
    //     inShowSerial,
    //     inShowTable,
    //     onDelete: tableOptions.onDelete
    // });
};

const focusFooter = ({ inContainerEl }) => {
    const el = inContainerEl.querySelector(
        "tfoot input, tfoot select, tfoot textarea"
    );
    el?.focus();
};

export { saveFooterRow };