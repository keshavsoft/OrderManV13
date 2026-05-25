import { deleteFunc } from './deleteFunc.js';

const startFetchAsGet = async ({ inQuery }) => {
    let localResponse = await deleteFunc({ inQuery });

    return await localResponse;
};

export { startFetchAsGet };
