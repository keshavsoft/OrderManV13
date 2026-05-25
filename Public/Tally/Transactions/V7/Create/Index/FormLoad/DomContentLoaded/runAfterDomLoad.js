// import { initHeader } from "../../../../../../../header/v1/initHeader.js";

const config = {
    containerId: 'kSTableContainer',
    tableName: "Bill Create",
    mode: "create", // or "show"
    layout: {
        verticalPosition: "top", // or left/right/bottom
        type: "vertical", // "vertical" | "table" | "vertical-table"
    },
    endPoints: {
        create: "/Api/V4/BillsTable/Insert",
        update: "",
        delete: "/Api/V9/BillsTable/Delete",
        find: "/Api/V9/BillsTable/find",
        dataListEndpoints: {
            ledgers: "/Api/V4/LedgerNames/ShowAll"
        }
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
            show: true,
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
            columnName: "LedgerName", isRequired: true,
            tableFooterDataListShow: true, dataListSource: "ledgers.LedgerName"
        },
        {
            columnName: "InvoiceDate", isRequired: false,
            isDate: true, defaultToday: true, isReadonly: false,
            autoFocus: false, isSearch: false
        },
        { columnName: "pk", isPrimaryKey: true, isVisible: false },
        { columnName: "PartyGSTIN", isRequired: false, isSearch: false },
        { columnName: "GstRegistrationType", isRequired: false, isReadonly: true }
    ],
    uiClasses: {
        form: {
            formClass: 'grid grid-cols-3 gap-x-8 gap-y-4 p-6 verticalForm',
            buttonClass: 'mt-2 px-4 py-1 bg-green-500 text-white',
            rowClass: 'flex items-center space-x-4',
            labelClass: 'w-24 text-sm font-medium',
            inputClass: 'flex-1 border rounded px-3 py-2'
        }
    },
    callbacks: {
        vertical: {
            onSuccess: async (res) => {
                const fromReponse = await res.json();
                // console.log("fromReponse : ", fromReponse);
                window.location.href = `../WithSubTable/index.html?pk=${fromReponse.pk}`;
            }
        }
    }
};

const runAfterDomLoad = async () => {
    const headerConfig = {
        items: [
            {
                text: "Masters",
                id: "Masters",
                icon: [
                    "M4 6h16",
                    "M4 10h16",
                    "M4 14h10",
                    "M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
                ],
                href: "../../../Masters/V6/Ledgers/index.html"
            },
            {
                text: "StockItems",
                id: "StockItemsHtmlId",
                icon: [
                    "M3 7l9 4 9-4",
                    "M3 7l9-4 9 4",
                    "M3 7v10l9 4 9-4V7",
                    "M12 11v10"
                ]
            },
            {
                text: "Transactions",
                id: "1",
                icon: [

                    "M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z",
                    "M14 2v6h6",
                    "M8 12h8",
                    "M8 16h8"

                ]
            },
            {
                text: "FromTally",
                id: "ImportHtmlId",
                icon: [
                    "M4 6h16",
                    "M4 10h16",
                    "M4 14h10",
                    "M6 4h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z"
                ]
            }
        ]
    };

    // initHeader(headerConfig);
    await callForHeader(headerConfig);

    await callKSTable(config);
};

const callKSTable = async (config) => {
    if (window.KSTable?.initVertical) {
        console.log("table loaded from window.KSTable");

        return window.KSTable.initVertical(config); // extension or CDN
    } else {
        console.log("table loaded from LOCAL js");

        const { initVertical } = await import("../../../../../../../KSTableAi/V32/entry.js"); // local
        return initVertical(config);
    }
};

const callForHeader = async (config) => {
    if (window.KSHeader?.initHeader) {
        console.log("table loaded from window.KSTable");

        return window.KSHeader.initHeader(config); // extension or CDN
    } else {
        console.log("table loaded from LOCAL js");

        const { initHeader } = await import("../../../../../../../header/v1/initHeader.js"); // local
        return initHeader(config);
    }
};

export { runAfterDomLoad };