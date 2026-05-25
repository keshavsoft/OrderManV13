import { hookAllListeners } from "./AddListeners/start.js";
import { formSearchParamsFunc } from "./formSearchParamsFunc.js";
// import { initTable, initVertical } from "../../../../../../../KSTableAi/V28/entry.js";

const runAfterDomLoad = () => {
    buildUi().then();

    hookAllListeners();
};

const buildUi = async () => {
    const pkFromParams = formSearchParamsFunc({ inKeyName: "pk" });

    const config = {
        containerId: 'kSTableContainer',
        tableName: "Bill Create",
        mode: "show", // or "show"
        layout: {
            verticalPosition: "top", // or left/right/bottom
            type: "vertical", // "vertical" | "table" | "vertical-table"
        },
        endPoints: {
            create: "/Api/V9/BillsTable/Insert",
            update: "",
            delete: "/Api/V2/BillsTable/Delete",
            find: "/Api/V4/BillsTable/find"
        },
        options: {
            firstRow: {
                showSearch: false
            },
            vertical: {
                showVertical: true,
                isDisabled: false,
                showSaveButton: true
            },
            dataList: {
                show: false,
            },
            table: {
                isDisabled: true,
                showTable: true,
                showRowOptions: true,
                showSerial: true,
                showFooter: false,
                footer: {
                    showDataList: true
                }
            },
            focus: {
                priority: ["vertical", "footer", "search"]
            }
        },
        columnsConfig: [
            {
                columnName: "LedgerName", isRequired: true, tableFooterDataListShow: true
            },
            { columnName: "InvoiceDate", isRequired: false, defaultValue: "20260327" },
            { columnName: "pk", isPrimaryKey: true, isVisible: false }
        ],
        uiClasses: {
            form: {
                formClass: 'grid grid-cols-3 gap-x-8 gap-y-4 p-6 verticalForm',
                buttonClass: 'mt-2 px-4 py-1 bg-green-500 text-white',
                rowClass: 'flex items-center space-x-4',
                labelClass: 'w-24 text-sm font-medium',
                inputClass: 'flex-1 border rounded px-3 py-2'
            }
        }
    };

    const configForSubTable = {
        containerId: 'ksSubTableContainer',
        tableName: "Bill Create",
        mode: "create", // or "show" "create"
        layout: {
            verticalPosition: "top", // or left/right/bottom
            type: "table", // "vertical" | "table" | "vertical-table"
        },
        endPoints: {
            create: "/Api/V4/ItemsTable/Insert",
            update: "",
            delete: "/Api/V4/ItemsTable/Delete",
            read: "/Api/V4/ItemsTable/FilterColumns",
            find: "/Api/V4/BillsTable/find",
            dataListEndpoints: {
                ItemName: "/Api/V4/StockItems/ShowAll"
            }
        },
        options: {
            firstRow: {
                showSearch: false
            },
            vertical: {
                showVertical: false,
                isDisabled: false,
                showSaveButton: true
            },
            dataList: {
                show: true,
            },
            table: {
                isDisabled: false,
                showTable: true,
                showRowOptions: true,
                showSerial: true,
                showFooter: true,
                footer: {
                    showDataList: true
                }
            },
            focus: {
                priority: ["vertical", "footer", "search"]
            }
        },
        columnsConfig: [
            {
                columnName: "ItemName", isRequired: true,
                tableFooterDataListShow: true, dataListSource: "ItemName.StockItemName",
                allowOnChange: true
            },
            {
                columnName: "Rate", isRequired: true,
                tableFooterDataListShow: true, defaultValue: "100"
            },
            { columnName: "Qty", isRequired: false, defaultValue: "2" },
            { columnName: "Amount", isRequired: false, defaultValue: "200" },
            {
                columnName: "TaxPer", isRequired: false, dataListColumn: "TaxPer",
                isVisible: false
            },
            {
                columnName: "Uom", isRequired: false, dataListColumn: "StockBaseUnits",
                isVisible: false
            },
            {
                columnName: "ParentPk", isRequired: false, defaultValue: pkFromParams,
                isVisible: false
            },
            { columnName: "pk", isPrimaryKey: true, isVisible: false }
        ],
        uiClasses: {
            form: {
                formClass: 'grid grid-cols-3 gap-x-8 gap-y-4 p-6 verticalForm',
                buttonClass: 'mt-2 px-4 py-1 bg-green-500 text-white',
                rowClass: 'flex items-center space-x-4',
                labelClass: 'w-24 text-sm font-medium',
                inputClass: 'flex-1 border rounded px-3 py-2'
            }
        }
    };

    await initVertical(config);

    await callKSTable(configForSubTable);
};

const callKSTable = async (config) => {
    if (window.KSTable?.initTableOnly) {
        console.log("table loaded from window.KSTable");

        return window.KSTable.initTable(config); // extension or CDN
    } else {
        // const { initTableOnly } = await import("../../../../../../../../KSTableAi/V28/entry.js"); // local
        const { initTable } = await import("https://keshavsoft.github.io/KsJsTableAi/Public/kstable.js"); // local

        return initTable(config);
    };
};

const initVertical = async (config) => {
    if (window.KSTable?.initTableOnly) {
        console.log("table loaded from window.KSTable");

        return window.KSTable.initVertical(config); // extension or CDN
    } else {
        // const { initTableOnly } = await import("../../../../../../../../KSTableAi/V28/entry.js"); // local
        const { initVertical } = await import("https://keshavsoft.github.io/KsJsTableAi/Public/kstable.js"); // local

        return initVertical(config);
    };
};

export { runAfterDomLoad };