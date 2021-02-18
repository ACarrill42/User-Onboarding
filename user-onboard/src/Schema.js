import * as Yup from 'yup';

const Schema = Yup.object().shape({
  name: Yup
  .string()
  .required('Name is required'),

  email: Yup
  .string()
  .required('Email is required'),

  password: Yup 
  .string()
  .required('Password is required')
  .min(6, 'must be a minimum of 6 characters'),

  service: Yup.boolean() 
})



export default Schema