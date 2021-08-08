export const SAVE_PROFILE_CHECKEND_ACTION = 'SAVE_PROFILE_CHECKEND_ACTION';
export const SAVE_PROFILE_ACTION = 'SAVE_PROFILE_ACTION';

export const createSaveProfileCheckendAction = () => ({
    type: SAVE_PROFILE_CHECKEND_ACTION,
    
})
export const createSaveProfileAction = ({name,surname,nick}) => ({
    type: SAVE_PROFILE_ACTION,
    payload:{name,surname,nick}
})