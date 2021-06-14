import PropTypes from 'prop-types';
import quizStyles from '../../styles/MyQuiz.module.css'

function QuestionCount(props) {
  return (
    <div className={quizStyles.questionCount}>
      Question <span>{props.counter}</span> of <span>{props.total}</span>
    </div>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;
