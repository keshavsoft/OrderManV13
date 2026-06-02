import { createFooterCell } from "./createFooterCell.js";

const startFunc = ({ keys, tr, options = {}, inDefaultRow, inTdClass,
    inShowDataList, onChangeFunc, inVisibleColumnsConfig }) => {

    const defaultRow = inDefaultRow;
    // console.log("keys : ", keys, inVisibleColumnsConfig);

    // keys.forEach(key => {
    //     const defaultValue = defaultRow[key];

    //     const createdFooterCell = createFooterCell({
    //         key,
    //         inDefaultValue: defaultValue,
    //         onChangeFunc,
    //         showDataList: inShowDataList,
    //         inColumnsConfig: options.inColumnsConfig,
    //         inTdClass
    //     });

    //     tr.appendChild(createdFooterCell);
    // });

    inVisibleColumnsConfig.forEach(loopColumn => {
        const defaultValue = defaultRow[loopColumn.columnName];

        const createdFooterCell = createFooterCell({
            key: loopColumn.columnName,
            inDefaultValue: defaultValue,
            onChangeFunc,
            showDataList: inShowDataList,
            inColumnsConfig: options.inColumnsConfig,
            inTdClass,
            inAllowOnChange: loopColumn.allowOnChange,
            inOnChangeType: loopColumn.onChangeType,
            inOnKeyDown: loopColumn?.onKeyDown,
            inOnKeyDownType: loopColumn?.onKeyDownType
        });

        tr.appendChild(createdFooterCell);
    });

};

export { startFunc };
