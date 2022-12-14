// import PropTypes from "prop-types";

import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";

import { useContext } from "react";
import FeedbackContext from "../context/feedbackContext";

function FeedbackList(
// { 
//   feedback, // No need in this prop since we use context to pass feedback to list its elements
//   feedbackDeleteHandler // No need in this prop since we moved delete function to the context
// }
) {
  const {feedback} = useContext(FeedbackContext) // getting Conext and its value from Context Provider

  if (!feedback || feedback.length === 0) {
    return <div>No feedback yet</div>;
  }

  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              // feedbackDeleteHandler={feedbackDelete} // No need to pass this prop, we get this function from the context
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
  //   return (
  //     <div className='feedback-list'>
  //       {feedback.map((item) => (
  //         <FeedbackItem key={item.id} item={item} feedbackDeleteHandler={feedbackDeleteHandler}></FeedbackItem>
  //       ))}
  //     </div>
  //   )
}

// FeedbackList.propTypes = {   // No need in this since we don't use feedback as a prop
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//     })
//   ),
// };

export default FeedbackList;
