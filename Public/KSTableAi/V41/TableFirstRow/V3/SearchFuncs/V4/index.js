// /TableSearch/start.js

import cacheRows from "./Cache/cacheRows.js";

import filterRows from "./Filter/filterRows.js";

import clearHighlights from "./Highlight/clearHighlights.js";
import highlightRows from "./Highlight/highlightRows.js";

import getRegex from "./Utils/getRegex.js";
import updateFooter from "./Utils/updateFooter.js";

const startFunc = ({
    inContainerEl,
    inUpdateFooter
}) => {

    const searchInput =
        inContainerEl.querySelector(".tableSearchClass");

    const rows =
        [...inContainerEl.querySelectorAll("tbody tr")];

    cacheRows({ rows });

    let timeout;

    searchInput.addEventListener("keyup", (event) => {

        clearTimeout(timeout);

        const searchValue =
            event.target.value.toLowerCase();

        filterRows({
            rows,
            searchValue
        });

        timeout = setTimeout(() => {

            clearHighlights({ rows });

            if (!searchValue) {

                updateFooter({
                    inUpdateFooter,
                    inContainerEl
                });

                return;

            };

            const regex =
                getRegex({
                    searchValue
                });

            highlightRows({
                rows,
                regex
            });

            updateFooter({
                inUpdateFooter,
                inContainerEl
            });

        }, 400);

    });

};

export default startFunc;