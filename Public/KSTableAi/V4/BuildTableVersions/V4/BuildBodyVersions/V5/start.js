import { buildRow } from "./buildRow.js";
import buildDeleteHandler from "./handlerFuncs/V7/buildDeleteHandler.js";

const buildBody = ({ inDataStore, inDom, inShowSerial = false,
    inVisibleColumnsConfig, inShowActions, inServices,
    inEndPoints, inConfig, inTableBody, inData
}) => {
    const dataToShow = inData;
    const tableBody = inTableBody;

    tableBody.innerHTML = '';

    const handleDelete = buildDeleteHandler({
        inServices,
        inEndPoints,
        inConfig,
        inDataStore,
        inVisibleColumnsConfig,
        inShowSerial,
        inTableBody: tableBody
    });

    // debugger;
    dataToShow.forEach((item, index) => {
        const row = buildRow({
            item, index, inVisibleColumnsConfig,
            inShowSerial,
            inShowActions,
            onDeleteFunc: handleDelete
        });

        tableBody.appendChild(row);
    });
};

export { buildBody };