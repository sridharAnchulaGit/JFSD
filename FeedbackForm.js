// FeedbackForm.js
import React, { useState } from 'react';
import Rating from './Rating';
import { callApi, errorResponse, getSession } from './main';

const FeedbackForm = () => {
  const [feedbackText, setFeedbackText] = useState('');
  const [userRating, setUserRating] = useState(0);
  const sid = getSession('sid');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use server-side API to submit feedback and rating
    const urlSubmitFeedback = 'http://localhost:5000/submit-feedback';
    const dataSubmitFeedback = JSON.stringify({
      emailid: sid,
      feedback: feedbackText,
      rating: userRating,
    });

    try {
      const response = await callApi('POST', urlSubmitFeedback, dataSubmitFeedback);
      // Handle success response as needed
      console.log(response);
    } catch (error) {
      // Handle error response
      console.error(error);
    }
  };

  const handleRatingChange = (newRating) => {
    setUserRating(newRating);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Feedback Form</h2>
      <div>
        <label>Rating:</label>
        <Rating onRatingChange={handleRatingChange} />
      </div>
      <div>
        <label>Feedback:</label>
        <textarea
          value={feedbackText}
          onChange={(e) => setFeedbackText(e.target.value)}
          placeholder="Enter your feedback"
        />
      </div>
      <button type="submit">Submit Feedback</button>
    </form>
  );
};

export default FeedbackForm;
