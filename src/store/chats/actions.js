export const ADD_CHAT = 'ADD_CHAT';
export const REMOVE_CHAT = 'REMOVE_CHAT';
export const CHOOSING_A_CHAT = 'CHOOSING_A_CHAT'

export const createAddChat = (name) => ({
    type: ADD_CHAT,
    payload:name
})

export const createRemoveChat = (id) => ({
    type: REMOVE_CHAT,
    payload:id
})

export const createChoosingChat = (id) => ({
    type: REMOVE_CHAT,
    payload:id
})
