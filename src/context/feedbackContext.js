import { createContext, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";
const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/feedback?_sort=id&_order=desc").then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.statusText;
        }
      });
      return res;
    };
    fetchData().then((res) => {
      setFeedback(res);
      setIsLoading(false);
    });
  }, []);

  const feedbackDeleteHandler = async (id) => {
    if (window.confirm("Are you sure you want to delete it?")) {
      await fetch(`feedback/${id}`, {
        method: 'DELETE'
      });
      setFeedback(feedback.filter((element) => element.id !== id));
    }
  };

  const feedbackAddHandler = async (newFeedback) => {
    const response = await fetch("/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();

    // newFeedback.id = uuidv4();
    setFeedback([data, ...feedback]);
  };

  const editFeedbackHandler = (feedback) => {
    setFeedbackEdit({ item: feedback, edit: true });
  };

  const updateFeedbackHandler = async (id, updItem) => {
    console.log(id, updItem)
    const response = await fetch(`/feedback/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updItem),
    });
    if (response.ok) {
      const data = await response.json()
      setFeedback(
        feedback.map((item) =>
          item.id === id
            ? { ...item, ...data } // Using spread operator, values rating and text from updItem will replace the existing
            // ? {id, rating: updItem.rating, text: updItem.text}
            : item
        )
      );
      setFeedbackEdit({ item: {}, edit: false });
    }
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
        isLoading: isLoading,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
