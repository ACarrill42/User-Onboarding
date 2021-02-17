import React from 'react';

function Form(props) {
    const {users} = props;
    return(
        <form>
            <div className = 'container'>
                <label> Name:
                    <input 
                        name = 'name'
                        type = 'text'
                    />
                </label>
                <label> Email:
                    <input 
                        name = 'email'
                        type = 'text'
                    />
                </label>
                <label>Password:
                    <input 
                        name = 'password'
                        type = 'text'
                    />
                </label>
                <label>Terms of Service
                    <input 
                        name = 'service'
                        type = 'checkbox'
                    />
                </label>
                <button>Submit</button>
            </div>   
        </form>

    )
}

export default Form