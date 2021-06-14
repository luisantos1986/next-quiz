import React from 'react'
import formStyles from '../styles/Forms.module.css'

/**
* @author
* @function Password
**/

const Password = ({checkUser}) => {

    const elements = ['text', 'password']

    console.log("password reached")
  return(
    <div className={formStyles.form}>
        <form onSubmit={checkUser}>
            {elements.map((element, i) => {
                const input = `input${i}`
                return (
                    <div key={i.toString()}>
                    <label for={element}>{element}</label>
                    <input id={element} type={element} autoComplete={element} required />
                    </div>
                )
            })}
            <button type="submit">LogIn</button>
        </form> 
    </div>
   )
  }


export default Password