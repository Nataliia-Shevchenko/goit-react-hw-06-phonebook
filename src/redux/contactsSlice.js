import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [{
      id: nanoid(),
      name: 'Al',
      number: 12131546654,
      
    }],
  },
  reducers: {
      add: {
        reducer(state, action) {
          state.contacts.push(action.payload);
        },
        prepare(contactName, contactNumber) {
          return {
            payload: {
              id: nanoid(),
              name: contactName,
              number:contactNumber,
            },
          };
        },
      },
    del: (state, action) => {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      // state.contacts.filter(contact => contact.id !== action.payload)
      state.contacts.splice(index, 1);
    },
  },
});

export const contactsReducer = contactsSlice.reducer;
export const { add, del } = contactsSlice.actions;
