import { initCreate, initShowTable } from "/KSTableAi/V4/entry.js";

const startFunc = async () => {
    const config = await fetch("Index/Configs/create.json");
    // debugger;
    const configJson = await config.json();

    await initCreate(configJson);
};

export default startFunc;