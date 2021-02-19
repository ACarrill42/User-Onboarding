import React from 'react';

function Form(props) {
    const { values, errors, disabler, change, submit } = props;

    const onSubmit = event => {
        event.preventDefault()
        submit()
    }

    const onChange = event => {
        let {name, value} = event.target
        if(event.target.type === 'checkbox') {
            value = event.target.checked
        }
        change(name,value)
    }
    return(
        <form>
            <div className = 'container' onSubmit ={onSubmit}>
                <label> Name:
                    <input 
                        value = {values.name}
                        onChange = {onChange}
                        name = 'name'
                        type = 'text'
                    />
                </label>
                <label> Email:
                    <input 
                        value = {values.email}
                        onChange = {onChange}
                        name = 'email'
                        type = 'text'
                    />
                </label>
                <label>Password:
                    <input 
                        value = {values.password}
                        onChange = {onChange}                    
                        name = 'password'
                        type = 'text'
                    />
                </label>
                <label>Terms of Service
                    <input 
                        onChange = {onChange}
                        name = 'service'
                        type = 'checkbox'
                    />
                </label>
                <div className = 'errors'>
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
                <button className = 'submitBtn' disbled = {disabler}>Submit</button>
            </div>   
        </form>

    )
}

export default Form