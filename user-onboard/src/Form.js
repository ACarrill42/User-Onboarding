import React from 'react';

function Form() {
    return(
        <form>
            <div className = 'container'>
                <label> Name:
                    <input 
                        name = 'name'
                        type = ''
                    />
                </label>
                <label> Email:
                    <input 
                        name = 'email'
                        type = ''
                    />
                </label>
                <label>Password:
                    <input 
                        name = 'password'
                        type = ''
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