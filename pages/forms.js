import {useState} from 'react'
import formStyles from '../styles/Forms.module.css'
import Form from '../components/Form'
import Modal from '../components/Modal'
import { connect } from 'react-redux'


const mapStateToProps = state => state
const mapDispatchToProps = (dispatch) => {
    return {
        addQuestion: (question) => dispatch({type: 'ADDQUESTION',
    question: question})
    }
}

const forms = ({questions, addQuestion}) => {

    const [display, setDisplay] = useState(false)

    const onModalResponse = (response) => {
        setDisplay(response)
    }

    console.log("from forms")
    console.log(questions)

    const addNewQuestion = async event => {
        event.preventDefault()
        let question = {question: event.target.question.value,
            answers:[{
                type:"true",
                content: event.target.correctAnswer.value
            },{
                type:"false",
                content: event.target.falseAnswer.value
            },{
                type:"false",
                content: event.target.secondFalseAnswer.value
            }]
        }
        console.log(question)
        addQuestion(question)
        console.log(questions)
        setDisplay(true)
    }


  return(
    <div className={formStyles.form}>
        <Modal 
            displayed={display}
            onModalResponse={onModalResponse}
        />
        <Form
            addQuestion={addNewQuestion} 
        />
    </div>
   )

 }

export default connect(mapStateToProps,mapDispatchToProps)(forms)