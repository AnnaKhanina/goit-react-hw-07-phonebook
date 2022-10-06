import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://6333fcc0433198e79dcd153a.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const isIncludes = (newName, stateContacts) => {
  return stateContacts.find(
    contact => contact.name.toLocaleLowerCase() === newName.toLocaleLowerCase()
  )
    ? true
    : false;
};

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    const { name, number: phone } = newContact;

    const stateContacts = thunkAPI.getState().contacts.items;
    console.log(stateContacts);
    console.log(isIncludes(name, stateContacts));

    if (isIncludes(name, stateContacts)) {
      alert(`${name} is already in contacts`);
      return thunkAPI.rejectWithValue(`${name} is already in contacts`);
    }

    try {
      const response = await axios.post(
       '/contacts',
        { name, phone }
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);