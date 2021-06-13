import { useEffect, useState } from 'react'
import quizQuestions from './api/quizQuestions'
import _ from 'lodash'
import Quiz from '../components/Qiuz/Quiz'
import Result from '../components/Qiuz/Result'

/**
* @author
* @function quiz
**/

const quiz = (props) => {

    const [counter, setCounter] = useState(0);
    const [questionId, setQuestionId] = useState(1);
    const [question, setQuestion] = useState({});
    const [answerOptions, setAnswerOptions] = useState([]);
    const [answer, setAnswer] = useState('');
    const [answerCount, setAnswerCount] = useState({});
    const [result, setResult] = useState({});
    const [finish, setFinish] = useState(false);
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        let newQuestions = shuffleArray(quizQuestions)
        // console.log("newQuestions")
        // console.log(newQuestions)
        setQuestions(newQuestions)
    },[])

    useEffect(() => {
        // console.log("questions called")
        if (!_.isEmpty(questions)){
            // console.log("questions Changed")
            // console.log(questions)
            setQuestion(questions[0])   
        }else {
            // console.log("questions empty")
        }   
    },[questions]) 

    useEffect(() => {
        if (!_.isEmpty(question)){
            // console.log("questionChanged")
            // console.log(question)
            const shuffledAnswerOptions = shuffleArray(question.answers)
            setAnswerOptions(shuffledAnswerOptions)
        }
    },[question])

    useEffect(() => {
        console.log("result called with")
        console.log(result)
        setFinish(!_.isEmpty(result))
    },[result])

    const shuffleArray = (array) => {
        // console.log('arrayIn')
        // console.log(array)
        let shuffled = array
            .map((a) => ({sort: Math.random(), value: a}))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value)

        // console.log('arrayOut')
        // console.log(shuffled)
        return shuffled
    }

    const handleAnswerSelected = (event) =>  {
        // console.log("handle answer selected")
        // console.log(event.currentTarget.value)
        setUserAnswer(event.currentTarget.value)
        // console.log(`QuestionID ${questionId}`)
        // console.log(`quisQuestions ${quizQuestions.length}`)

        if (questionId < quizQuestions.length) {
            setTimeout(() => setNextQuestion(), 300)
        } else {
            console.log("else with answercount")
            console.log(answerCount)
            setTimeout(() => setResult(answerCount), 300)
        }
    }

    const setUserAnswer = (answer) => {
        let newAnswerCount = answerCount + 1
        let myAnswer = (answerCount[answer] || 0) + 1
        setAnswerCount(newAnswerCount)
        setAnswer(myAnswer)
    }

    const setNextQuestion = () => {
        let count = counter + 1
        let newQuestionId = questionId + 1
        setCounter(count)
        setQuestionId(newQuestionId)
        setQuestion(questions[count])
        setAnswer('')
    }

    const renderQuiz = () => {
        return (
          <Quiz
            answer={answer}
            answerOptions={answerOptions}
            questionId={questionId}
            question={question.question}
            questionTotal={quizQuestions.length}
            onAnswerSelected={handleAnswerSelected}
          />
        );
      }
    
    const  renderResult = () => {
        return <Result quizResult={result} />;
      }
  return(
    <div>
        {finish ? renderResult() : renderQuiz()}
    </div>
   )
  }


export default quiz