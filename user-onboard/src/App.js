import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Form from './Form';
import Schema from './Schema';

// const startValues = {
//   name: '',
//   email: '',
//   password:'',
//   service: false
// };

// const startErrors = {
//   name: '',
//   email: '',
//   password: ''
// }

const disable = true;




function App() {
  const [ users , setUsers ] = useState([]);

  const post = newFriend => {
    axios.post('https://reqres.in/api/users' , newFriend)
    .then(res => {
      console.log(res.data)
      setUsers(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    post()
  } , [])

  return (
    <div className="App">
      <Form users = {users}/>
    </div>
  );
}

export default App;
