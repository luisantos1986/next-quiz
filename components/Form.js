import React from 'react'

/**
* @author
* @function Form
**/

const Form = ({addQuestion}) => {

    const elements = ['question', 'correctAnswer', 'falseAnswer', 'secondFalseAnswer', 'thirdFalseAnswer']
  return(
    <div>
        <form onSubmit={addQuestion}>
            {elements.map((element, i) => {
                const input = `input${i}`
                return (
                    <div key={i.toString()}>
                    <label for={element}>{element}</label>
                    <input id={element} type="text" autoComplete={element} required />
                    </div>
                )
            })}
            <button type="submit">Add</button>
        </form> 
    </div>
   )

 }

export default Form