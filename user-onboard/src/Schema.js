import * as Yup from 'yup';

const Schema = Yup.object().shape({
  name: Yup
  .string()
  .required(),

  email: Yup
  .string()
  .required(),

  password: Yup 
  .string()
  .required()
  .min(6, 'must be a minimum of 6 characters'),
  
  service: Yup.boolean() 
})



export default Schema