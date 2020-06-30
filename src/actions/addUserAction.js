import axios from 'axios'


export const addUser = (name, email, password) => {
  return dispatch => {
    console.log('action value', 'name :', name, 'email:', email, 'password:', password);
    
    // return axios.post('/invite', { email: email }).then(response => {
    //   console.log(response)
    // })
  }
}