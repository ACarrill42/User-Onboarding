import React, { useState , useEffect } from 'react';
import axios from 'axios';
import Form from './Form';
import Schema from './Schema';
import * as Yup from 'yup';

const startValues = {
  name: '',
  email: '',
  password:'',
  service: false
};

const startErrors = {
  name: '',
  email: '',
  password: ''
}

const disable = true;
const initialUser = [];



function App() {

  //// State ////
  const [ users , setUsers ] = useState(initialUser);
  const [ formValues, setFormValues ] = useState(startValues);
  const [ formErrors, setFormErrors ] = useState(startErrors);
  const [ disabler , setDisabled ] = useState(disable);

  //// Post Request ////
  const post = newFriend => {
    axios.post('https://reqres.in/api/users' , newFriend)
    .then(res => {
      console.log(res.data)
      setUsers([...users, res.data])
      setFormValues(startValues)
    })
    .catch(err => {
      console.log(err)
    })
  }
  useEffect(() => {
    post()
  } , [])

  useEffect(() => {
    Schema.isValid(formValues)
      .then(isValid => {
        setDisabled(!isValid)
      })
  }, [formValues])

 //// Event Handlers ////
 const change =(name ,value) => {
  Yup.reach(Schema , name)
    .validate(value)
    .then(res => {
      setFormErrors({...formErrors, [name]: ''})
    })
    .catch(err => setFormErrors({...formErrors, [name]: err.errors[0]}))
    setFormValues({...formValues, [name]: value});
 }

 const submit = () => {
   const friend = {
     name: formValues.name,
     email: formValues.email,
     password: formValues.password
   }
   post(friend)
 }

  return (
    <div className="App">
      <Form 
      change = {change}
      submit = {submit}
      values = {formValues}
      errors = {formErrors}
      disabler = {disabler}
      />
    </div>
  );
}

export default App;
