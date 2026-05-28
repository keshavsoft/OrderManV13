import { saveFooterRow } from "../saveFooterRow.js";

const startFunc = async ({ inServices, inEndPoints, inPayload, inDataStore, inTableBody,
    inVisibleColumnsConfig, inShowSerial
}) => {

    await saveFooterRow({
        inServices, inEndPoints, inPayload, inDataStore, inTableBody,
        inVisibleColumnsConfig, inShowSerial
    });
};

export { startFunc };