import PropTypes from 'prop-types';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Question from './Question';
import QuestionCount from './QustionCount';
import AnswerOption from './AnswerOption';
import quizStyles from '../../styles/Quiz.module.css'

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.content}
        answerContent={key.content}
        answerType={key.type}
        answer={props.answer}
        questionId={props.questionId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <SwitchTransition mode="out-in"
    
    >
    <CSSTransition 
      className={quizStyles.quizContainer}
      classNames='fade'
      timeout={1}
      unmountOnExit

    >
      <div key={props.questionId}>
        <QuestionCount counter={props.questionId} total={props.questionTotal} />
        <Question content={props.question} />
        <ul className={quizStyles.answerOptions}>
          {props.answerOptions.map(renderAnswerOptions)}
        </ul>
      </div>
    </CSSTransition>
    </SwitchTransition>
  );
}

Quiz.propTypes = {
  answer: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;