import streams from './streams';

export const deleteStream = async (id) => {
    await streams.delete(`/todos/${id}`); 
};