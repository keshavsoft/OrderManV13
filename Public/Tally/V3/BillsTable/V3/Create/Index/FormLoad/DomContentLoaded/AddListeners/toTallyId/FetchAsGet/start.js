import { StartFunc as StartFuncFetchFuncs } from './fetchFuncs.js';
import { StartFunc as StartFuncFromAfterFetch } from './AfterFetch/entryFile.js';

const startFetchAsGet = async ({ inPk }) => {
    let localResponse = await StartFuncFetchFuncs({ inPk });

    StartFuncFromAfterFetch({
        inResponse: localResponse,
        inPk
    });
};

export { startFetchAsGet };
