export const ADD_MESSAGE = 'ADD_MESSAGE';
export const ID_CHAT_MESSAGE = 'ID_CHAT_MESSAGE';

export const createAddMessage = ({id, value}) => ({
    type: ADD_MESSAGE,
    payload:{id, value}
})

export const createIdMessage = (id) => ({
    type: ID_CHAT_MESSAGE,
    payload:id
})