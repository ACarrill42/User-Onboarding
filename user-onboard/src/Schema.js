import * as Yup from 'yup';

const Schema = Yup.object().shape({
  name: Yup
  .string()
  .required(),

  email: Yup
  .string()
  .required()
  .min(5, 'must be a minimum of 5 characters'),

  password: Yup 
  .string()
  .required()
  .min(6, 'must be a minimum of 6 characters'),

  service: Yup.boolean() 
})



export default Schema