// import PropTypes from "prop-types";
import { useState, useContext, useEffect } from "react";

import Card from "./shared/Card";
import Button from "./shared/Button";
import RatingSelect from "./RatingSelect";

import FeedbackContext from "../context/feedbackContext";


function FeedbackForm( 
  // {feedbackAddHandler}  //Passing this feedback add handler from the context
  ) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");

  const {feedbackAdd, currentFeedback, feedbackUpdate } = useContext(FeedbackContext);

  useEffect(() => {
    if(currentFeedback.edit) {
      setBtnDisabled(false)
      setText(currentFeedback.item.text)
      setRating(currentFeedback.item.rating)
    } else {
      setBtnDisabled(true)
    }
  }, [currentFeedback])  

  const handleTextChange = (e) => {
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage("Text should be more than 10 characters");
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  const handleRadioChangeForm = (select) => {
    setRating(select);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      text,
      rating
    }
    currentFeedback.edit 
    ? feedbackUpdate(currentFeedback.item.id, newFeedback)
    : feedbackAdd(newFeedback);
    setText('');
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>Rate your service with us!</h2>
        <RatingSelect
          radioChangeHandler={handleRadioChangeForm}
        />
        <div className="input-group">
          <input
            value={text}
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
          />
          <Button version="secondary" type="submit" isDisabled={btnDisabled}>
            {currentFeedback.edit ? 'Update' : 'Send'}
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm;
