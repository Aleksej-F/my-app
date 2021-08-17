import { chatsReducer} from "../reducer";
import {createRemoveChat, chat} from "../actions";

describe('playersReducer', () => {
    it('удаление чата', () => {
        const chats = Array.from({
            length: 5,
          }).map((_, index) => chat())
        
        const chatsResult =chats.filter(word => word.id!==chats[3].id)

        const result = chatsReducer({
            chats,
          }, createRemoveChat(chats[3].id));

          expect(result).toEqual({
            chats: chatsResult
          })
    })



})