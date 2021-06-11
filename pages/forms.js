import React from 'react'
import formStyles from '../styles/Forms.module.css'


const forms = (props) => {
    const addQuestion = async event => {
        event.preventDefault()
        let question = event.target.question.value
        console.log(question)
    }

    const elements = ['question', 'correctAnswer', 'falseAnswer', 'secondFalseAnswer', 'thirdFalseAnswer']
  return(
    <div className={formStyles.form}>
        <form onSubmit={addQuestion}>
            {elements.map((element, i) => {
                console.log(`element = ${element} i = ${i}`)
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

export default forms