import { startFetchAsGet } from "./FetchAsGet/start.js";

const clickFuncToRun = ({ inCurrentTarget }) => {
    applyActive({ inCurrentTarget });

    startFetchAsGet();
};

const applyActive = ({ inCurrentTarget }) => {
    const localCurrentTarget = inCurrentTarget;

    const menu = localCurrentTarget.closest("#menu");

    menu.querySelectorAll("li a.active")
        .forEach(a => a.classList.remove("active"));

    localCurrentTarget.classList.add("active");

    localCurrentTarget.classList.add("active");
};

export { clickFuncToRun };