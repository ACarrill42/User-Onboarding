import React, { useState , useEffect } from 'react';
import Axios from 'axios';
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
  const [ users,setUsers ] = useState([]);

  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
