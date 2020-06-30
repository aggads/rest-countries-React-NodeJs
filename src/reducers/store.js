// ./store.js
import { createStore} from 'redux';
import { combineForms} from 'react-redux-form';

const initialUserState = {
  name: '',
  email: '',
  password: ''
};

const store = createStore(combineForms({
  user: initialUserState,
}));

export default store;
