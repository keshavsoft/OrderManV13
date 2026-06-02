import afterHeadSave from "../../CommonFuncs/afterHeadSave.js";

const clickFuncToRun = ({ inCurrentTarget }) => {
    applyActive({ inCurrentTarget });

    // const localCurrentTarget = inCurrentTarget;

    // const menu = localCurrentTarget.closest("#menu");

    // menu.querySelectorAll("li a.active")
    //     .forEach(a => a.classList.remove("active"));

    // localCurrentTarget.classList.add("active");

    // localCurrentTarget.classList.add("active");

    const pk = prompt("Enter PK");

    if (pk === null || pk.trim() === "") return;

    jFLocalToInputhtmlId(pk);

    afterHeadSave(pk).then();
};

const applyActive = ({ inCurrentTarget }) => {
    const localCurrentTarget = inCurrentTarget;

    const menu = localCurrentTarget.closest("#menu");

    menu.querySelectorAll("li a.active")
        .forEach(a => a.classList.remove("active"));

    localCurrentTarget.classList.add("active");

    localCurrentTarget.classList.add("active");
};

let jFLocalToInputhtmlId = (inValue) => {
    let jVarLocalHtmlId = 'htmlId';
    let jVarLocalhtmlId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalhtmlId === null === false) {
        jVarLocalhtmlId.innerHTML = inValue;
    };
};

export { clickFuncToRun };