import { Provider } from 'react-redux';
import { store } from 'redux/store';
import PhoneBook from './components/PhoneBook';

export const App = () => {
  return (
    <Provider store={store}>
      <PhoneBook></PhoneBook>
    </Provider>
  );
};
