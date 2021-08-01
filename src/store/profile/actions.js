export const SAVE_PROFILE_ACTION = 'SAVE_PROFILE_ACTION';

export const createSaveProfileAction = (checked) => ({
    type: SAVE_PROFILE_ACTION,
    payload: checked,
})