import streams from './streams';

export const fetchStreams = async () => {
    return await streams.get('/todos');
};

export const fetchStream = async (id) => {
    return await streams.get(`/todos/${id}`);
};