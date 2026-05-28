import { saveFooterRow } from "../saveFooterRow.js";

const startFunc = async ({ inServices, inEndPoints, inPayload }) => {
    await saveFooterRow({
        inServices, inEndPoints, inPayload
    });
};

export { startFunc };