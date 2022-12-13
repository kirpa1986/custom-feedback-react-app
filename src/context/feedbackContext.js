import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: "1",
      rating: 8,
      text: "This item is from context",
    },
  ]);

  const feedbackDeleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete it?")) {
      setFeedback(feedback.filter((element) => element.id !== id));
    }
  };

  const feedbackAddHandler = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  return (
    <FeedbackContext.Provider value={{ feedback: feedback, feedbackDelete: feedbackDeleteHandler, feedbackAdd: feedbackAddHandler}}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext