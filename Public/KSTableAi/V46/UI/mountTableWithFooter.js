import buildHeader from "../BuildTableVersions/V4/BuildHeaderVersions/V3/index.js";
import { buildBody } from "../BuildTableVersions/V4/BuildBodyVersions/V3/start.js";
import createForm from "../BuildSearchForm/V1/createForm.js";
import buildDataLists from "../BuildDataLists/V2/addToDom.js";

// import buildFooter from "../BuildTableVersions/V4/BuildFooterVersions/ForSummary/V8/CreateFooterRow/V3/start.js";

import buildFooter from "../BuildTableVersions/V4/BuildFooterVersions/ForCreate/V2/start.js";

import { buildFullUI } from "./compose/buildFullUI.js";

const startFunc = ({
    containerEl,
    dataStore,
    dom,
    services,
    options,
    endPoints,
    columnsConfig,
    uiClasses,
    callbacks,
    inConfig,
    inShowFooter = true
}) => {
    // debugger

    const visibleColumns = dataStore.getVisibleColumns();
    const visibleColumnsConfig = dataStore.getVisibleColumnsConfig();
    const searchableColumnsConfig = dataStore.getSearchableColumnsConfig();

    const data = dataStore.getData();
    const showSerial = options.table.showSerial;
    const serialWidth = options.table.serialWidth;
    const showDataList = options.table.showDataList;

    const dataListColumns = dataStore.getDataListColumns();

    const showTotals = options.table.showTotals;
    const showBalance = options.table.showBalance;
    const showFilterVerticalForm = options.showFilterVerticalForm;
    const showSearch = options.firstRow.showSearch;
    const showTotalsForSearch = options?.table?.showTotalsForSearch;
    const showBalanceForSearch = options?.table?.showBalanceForSearch;
    const showFooterRows = options?.table?.showFooterRows;

    const defaultRow = dataStore.getDefaultRow();
    const showSave = true;

    buildFullUI({
        containerEl: containerEl,
        inTableName: inConfig.tableName,
        inIsShowHeaderRow: showSearch,
        inUiClasses: uiClasses
    });
    // debugger;
    const tableBody = dom.getTableBody(containerEl);

    if (showFilterVerticalForm) {
        const searchForm = createForm({
            inVisibleColumnsConfig: visibleColumnsConfig,
            inSearchableColumnsConfig: searchableColumnsConfig,
            inServices: services,
            inConfig
        });

        containerEl.prepend(searchForm);
    };

    buildHeader({
        inContainerEl: containerEl,
        inDom: dom,
        inThClassName: uiClasses?.thead?.thClass,
        inTrClassName: uiClasses?.thead?.trClass,
        inThSerialClassName: uiClasses?.thead?.thSerialClass,
        inVisibleColumnsConfig: visibleColumnsConfig,
        inShowSerial: showSerial,
        inSerialWidth: serialWidth,
        inShowActions: showSave
    });

    buildBody({
        inDataStore: dataStore,
        inContainerEl: containerEl,
        inDom: dom,
        inVisibleColumnsConfig: visibleColumnsConfig,
        inShowSerial: showSerial
    });

    if (inShowFooter) {
        buildFooter({
            inServices: services,
            inEndPoints: endPoints,
            inTableFooter: dom.getTableFooter(containerEl),
            inOptions: options,
            inVisibleColumnsConfig: visibleColumnsConfig,
            inData: data,
            inShowSerial: showSerial,
            inShowTotals: showTotals,
            inShowBalance: showBalance,
            inShowTotalsForSearch: showTotalsForSearch,
            inShowBalanceForSearch: showBalanceForSearch,
            inShowFooterRows: showFooterRows,
            inDefaultRow: defaultRow,
            keys: visibleColumns,
            inDom: dom,
            inShowDataList: showDataList,
            inDataStore: dataStore,
            inShowSave: showSave,
            inTableBody: tableBody
        });
    };

    if (showDataList) {
        buildDataLists({
            inContainerEl: containerEl,
            inDataStore: dataStore,
            inDom: dom,
            inData: data,
            inDataListColumns: dataListColumns
        });
    };
};

export default startFunc;