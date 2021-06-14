import { useState } from 'react'
import { useSelector } from 'react-redux'
import jsonQuestionsStyles from '../styles/JsonQuestions.module.css'
import Password from '../components/Password'

const useQuestions = () => {
    return useSelector(
        (state) => ({
            myQuestions: state.questions
        })
    )
}

const jsonQuestions = (props) => {

    const myUser = 'root'
    const myPassword = 'ReactNativeJSONQuestions'

    const [viewJson, setViewJson] = useState(false);

    const checkUser = (event) => {
        event.preventDefault()
        // console.log(event.target.text.value)
        // console.log(event.target.password === myUser)
        // console.log(event.target.password)
        
        setViewJson(event.target.text.value === myUser && event.target.password.value === myPassword)
    }
    
    const { myQuestions }  = useQuestions()
    return viewJson ? (
        <div className={jsonQuestionsStyles.jsonQuestions}>
            <pre>{JSON.stringify(myQuestions, null, 2) }</pre>
        </div>
        ) : <Password 
            checkUser = {checkUser}
            />

  }


export default  jsonQuestions