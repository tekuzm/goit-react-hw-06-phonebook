import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/es/persistStore';
import { contactsReducer } from './contacts/contactsSlice';
import { filterReducer } from './filter/filterSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});

export const persistor = persistStore(store);
