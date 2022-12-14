import { createContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: "1",
      rating: 8,
      text: "This is Item 1",
    },
    {
      id: "2",
      rating: 8,
      text: "This is Item 2",
    },
    {
      id: "3",
      rating: 8,
      text: "This is Item 3",
    },
  ]);

  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  const feedbackDeleteHandler = (id) => {
    if (window.confirm("Are you sure you want to delete it?")) {
      setFeedback(feedback.filter((element) => element.id !== id));
    }
  };

  const feedbackAddHandler = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const editFeedbackHandler = (feedback) => {
    setFeedbackEdit({ item: feedback, edit: true });
  };

  const updateFeedbackHandler = (id, updItem) => {
    setFeedback(feedback.map((item) => (item.id === id 
        ? {...item, ...updItem}  // Using spread operator, values rating and text from updItem will replace the existing
        // ? {id, rating: updItem.rating, text: updItem.text}
        : item)));
    setFeedbackEdit({item: {}, edit: false})
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback: feedback,
        feedbackDelete: feedbackDeleteHandler,
        feedbackAdd: feedbackAddHandler,
        feedbackEdit: editFeedbackHandler,
        currentFeedback: feedbackEdit,
        feedbackUpdate: updateFeedbackHandler,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
