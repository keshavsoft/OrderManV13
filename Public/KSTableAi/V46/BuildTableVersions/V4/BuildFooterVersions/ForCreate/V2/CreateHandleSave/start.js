import { saveFooterRow } from "../saveFooterRow.js";

const startFunc = async ({ inServices, inEndPoints, inPayload, inDataStore, inTableBody,
    inVisibleColumnsConfig
}) => {

    await saveFooterRow({
        inServices, inEndPoints, inPayload, inDataStore, inTableBody,
        inVisibleColumnsConfig
    });
};

export { startFunc };