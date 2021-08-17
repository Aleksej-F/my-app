import {db} from "../../api/firebase"
import faker from "faker"

export const ADD_CHAT = 'ADD_CHAT';
export const REMOVE_CHAT = 'REMOVE_CHAT';
export const CHOOSING_A_CHAT = 'CHOOSING_A_CHAT';
export const ACTIVE_CHAT = 'ACTIVE_CHAT';

export const chat = function() {
    return {
    id: faker.datatype.uuid(),
    avatar: faker.image.avatar(),
    name: faker.name.findName(),
    priz: false,
    }
  }

export const createAddChat = (  ) => (dispatch, getState) => {
    dispatch(
      addChatsWithFirebase( chat() )
    )
}

export const createRemoveChat = (id) => ({
    type: REMOVE_CHAT,
    payload:id
})

export const createChoosingChat = (id) => ({
    type: CHOOSING_A_CHAT,
    payload:id
})

export const createActiveChat = (item) => ({
  type: ACTIVE_CHAT,
  payload:item
})

const getPayloadFromSnapshot = (snapshot) => {
    const chats = [];
    snapshot.forEach((mes) => {
      chats.push(mes.val());
    });
    return { chats}
  }

  export const deleteChatsWithFirebase = (chatId) => async () => {
    db.ref("chats").child('chats').child(chatId).remove();
    db.ref("messages").child(chatId).remove();
  };
  


export const addChatsWithFirebase = (chats) => async () => {
   db.ref("chats").child('chats').child(chats.id).set(chats);
  };

  export const initChatsTracking = () => (dispatch) => {
    db.ref("chats").on("child_changed", (snapshot) => {
      const payload = getPayloadFromSnapshot(snapshot);
      dispatch({
        type: ADD_CHAT,
        payload,
      });
    });
  
    db.ref("chats").on("child_added", (snapshot) => {
      const payload = getPayloadFromSnapshot(snapshot);
      dispatch({
        type: ADD_CHAT,
        payload,
      });
    });

    db.ref("chats").on("child_removed", (snapshot) => {
     const payload = getPayloadFromSnapshot(snapshot);
     dispatch({
        type: ADD_CHAT,
        payload,
      });
    });
  };