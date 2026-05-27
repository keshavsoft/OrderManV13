import { startFunc as createFooterRow } from "../CreateFooterRow/start.js";

const startFunc = ({
    inData,
    keys,
    localHandleSave,
    localHandleOnChange,
    inVisibleColumnsConfig,
    inDefaultRow,
    inShowSerial,
    inShowDataList
}) => {
    // debugger

    const localTr = createFooterRow({
        keys,
        options: {
            showSerial: false,
            showDataList: false,
            inColumnsConfig: inVisibleColumnsConfig,
            onSave: localHandleSave,
            onChangeFunc: localHandleOnChange
        },
        inDefaultRow,
        inTdClass: "px-4 py-2 border",
        inSerialClass: "",
        inShowSerial,
        inShowDataList
    });

    return localTr;
};

export { startFunc };