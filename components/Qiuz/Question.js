import PropTypes from 'prop-types';
import quizStyles from '../../styles/Quiz.module.css'

function Question(props) {
  return <h2 className={quizStyles.question}>{props.content}</h2>;
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;
