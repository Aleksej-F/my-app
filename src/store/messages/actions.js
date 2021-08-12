import {db} from "../../api/firebase"
/*
export const ADD_MESSAGE = 'ADD_MESSAGE';


export const createAddMessage = ({id, message}) => ({
    type: ADD_MESSAGE,
    payload:{id, message}
})
*/
export const ID_CHAT_MESSAGE = 'ID_CHAT_MESSAGE';
export const createIdMessage = (id) => ({
    type: ID_CHAT_MESSAGE,
    payload:id
})

export const CHANGE_MESSAGES = 'CHANGE_MESSAGES';

const getPayloadFromSnapshot = (snapshot) => {
    const messages = [];
  
    snapshot.forEach((mes) => {
      messages.push(mes.val());
    });
  
    return { chatId: snapshot.key, messages }
  }
  
  export const addMessageWithFirebase = (chatId, message) => async () => {
    db.ref("messages").child(chatId).child(message.id).set(message);
  };
  
  export const initMessageTracking = () => (dispatch) => {
    db.ref("messages").on("child_changed", (snapshot) => {
      const payload = getPayloadFromSnapshot(snapshot);
      dispatch({
        type: CHANGE_MESSAGES,
        payload,
      });
    });
  
    db.ref("messages").on("child_added", (snapshot) => {
      const payload = getPayloadFromSnapshot(snapshot);
      dispatch({
        type: CHANGE_MESSAGES,
        payload,
      });
    });
  };
  
