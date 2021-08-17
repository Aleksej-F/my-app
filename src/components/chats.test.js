import React from 'react'

import {render, fireEvent} from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import { Chat, ChatTestIds } from "./chat"

describe('Chat', () => {
 
    it('вызов метода  createAddChat по клику на кнопку', () => {
        const createAddChat = jest.fn();

        const component = render(<Chat onClick={createAddChat}  />)

        fireEvent.click(component.getByTestId(ChatTestIds.createAddChat))

        expect(createAddChat).toBeCalled()
    }
    
    )

})