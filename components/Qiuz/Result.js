import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';

function Result({quizResult}) {
  console.log(quizResult)
  return (
    <CSSTransition
      className="container result"
      component="div"
      transitionName="fade"
    >
      <div>
        Your Score <strong>{JSON.stringify(quizResult, null, 2) }</strong>
      </div>
    </CSSTransition>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
