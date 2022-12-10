import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "../Header";
import FeedbackForm from "../FeedbackForm";
import FeedbackStats from "../FeedbackStats";
import FeedbackList from "../FeedbackList";
import FeedbackData from "../../data/feedbackData";

function FeedbackPage() {
  const [feedback, setFeedback] = useState(() => FeedbackData);

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
    <>
      <Header about={true}/>
      <div className="container">
        <FeedbackForm feedbackAddHandler={feedbackAddHandler} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList
          feedback={feedback}
          feedbackDeleteHandler={feedbackDeleteHandler}
        />
      </div>
    </>
  );
}

export default FeedbackPage;
