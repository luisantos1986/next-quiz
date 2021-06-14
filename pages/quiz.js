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
        setQuestions(newQuestions)
    },[])

    useEffect(() => {
        if (!_.isEmpty(questions)){
            setQuestion(questions[0])   
        } 
    },[questions]) 

    useEffect(() => {
        if (!_.isEmpty(question)){
            const shuffledAnswerOptions = shuffleArray(question.answers)
            setAnswerOptions(shuffledAnswerOptions)
        }
    },[question])

    useEffect(() => {
        console.log("result called with")
        console.log(result)
        setFinish(!_.isEmpty(result))
    },[result])

    useEffect(() => {
        if (!_.isEmpty(answerCount)) {
            if (questionId < quizQuestions.length) {
                setTimeout(() => setNextQuestion(), 300)
            } else {
                console.log("else with answercount")
                console.log(answerCount)
                setTimeout(() => setResult(answerCount), 300)
            }
        }
    },[answerCount])

    const shuffleArray = (array) => {
        let shuffled = array
            .map((a) => ({sort: Math.random(), value: a}))
            .sort((a, b) => a.sort - b.sort)
            .map((a) => a.value)

        return shuffled
    }

    const handleAnswerSelected = (event) =>  {
        console.log("handle AnswerSelected")
        console.log(event.currentTarget.value)
        setUserAnswer(event.currentTarget.value)

    }

    const setUserAnswer = (answer) => {
        let newAnswerCount = {
            ...answerCount,
            [answer]: (answerCount[answer] || 0) + 1
        }
        setAnswerCount(newAnswerCount)
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