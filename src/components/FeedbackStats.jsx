// import PropTypes from 'prop-types'
import { useContext } from "react";
import FeedbackContext from "../context/feedbackContext";

function FeedbackStats
(
// { 
//   feedback // No need in this prop since we use context to pass feedback to list its elements
// }
) {
  const {feedback} = useContext(FeedbackContext) // getting Conext and its value from Context Provider

  let average =
    (feedback.reduce((accumulator, current) => accumulator + current.rating, 0) /
    feedback.length).toFixed(1).replace(/[.,]0$/, '');
  return (
    <div className="feedback-stats">
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
}


// FeedbackStats.propTypes = {
//     feedback: PropTypes.array.isRequired,
// }

export default FeedbackStats;
