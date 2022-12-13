// import { useState } from "react";

import Header from "../Header";
import FeedbackForm from "../FeedbackForm";
import FeedbackStats from "../FeedbackStats";
import FeedbackList from "../FeedbackList";
// import FeedbackData from "../../data/feedbackData";
import { FeedbackProvider } from "../../context/feedbackContext";


function FeedbackPage() {
  // const [feedback, setFeedback] = useState(() => FeedbackData);



  return (
    <FeedbackProvider>
      <Header about={true}/>
      <div className="container">
        <FeedbackForm />
        <FeedbackStats 
        // feedback={feedback}  //  Don't need to use this prop to FeedbackList, it uses a global context and FeedbackProvider
        />
        <FeedbackList
          // feedback={feedback}  // Don't need to use this prop to FeedbackList, it uses a global context and FeedbackProvider
          // feedbackDeleteHandler={feedbackDeleteHandler}  // Passing this function in the context, not as a prop
        />
      </div>
    </FeedbackProvider>
  );
}

export default FeedbackPage;
