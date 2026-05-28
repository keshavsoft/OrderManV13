const startFunc = async () => {
    const config = await fetch("config.json");
    // debugger;
    const configJson = await config.json();

    if (window?.KSTable?.initTableWithFooter) {
        console.log("loaded from cdn");

        window.KSTable.initTableWithFooter(configJson);
    };
};

export default startFunc;