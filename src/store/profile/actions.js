import {db} from "../../api/firebase"
export const SAVE_PROFILE_CHECKEND_ACTION = 'SAVE_PROFILE_CHECKEND_ACTION';
export const SAVE_PROFILE_ACTION = 'SAVE_PROFILE_ACTION';

export const createSaveProfileCheckendAction = () => ({
    type: SAVE_PROFILE_CHECKEND_ACTION,
    
})
export const createSaveProfileAction = ({name,surname,nick}) => ({
    type: SAVE_PROFILE_ACTION,
    payload:{name,surname,nick}
})

export const addProfileWithFirebase = (profile) => async () => {
    console.log('сохрф')
    db.ref("profile").child('user').set(profile);
   
};
   export const initProfileTracking  = () => (dispatch) => {
    db.ref("profile").on("child_changed", (snapshot) => {
      //const payload = getPayloadFromSnapshot(snapshot);
      console.log(snapshot.val())
      const payload = snapshot.val()
      dispatch({
        type: SAVE_PROFILE_ACTION,
        payload,
      });
    });
  
    db.ref("profile").on("child_added", (snapshot) => {
      //const payload = getPayloadFromSnapshot(snapshot);
      console.log(snapshot.val())
      const payload = snapshot.val()
      dispatch({
        type: SAVE_PROFILE_ACTION,
        payload,
      });
    });

    
  };