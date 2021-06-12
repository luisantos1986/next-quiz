import { useSelector } from 'react-redux'
import jsonQuestionsStyles from '../styles/JsonQuestions.module.css'

const useQuestions = () => {
    return useSelector(
        (state) => ({
            myQuestions: state.questions
        })
    )
}

const jsonQuestions = (props) => {
    console.log("from props")

    console.log(props)
    const { myQuestions }  = useQuestions()
  return(
    <div className={jsonQuestionsStyles.jsonQuestions}>
        <pre>{JSON.stringify(myQuestions, null, 2) }</pre>
    </div>
   )
  }


export default  jsonQuestions