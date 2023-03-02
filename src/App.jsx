import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';
import PhoneBook from './components/PhoneBook';

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PhoneBook></PhoneBook>
      </PersistGate>
    </Provider>
  );
};
