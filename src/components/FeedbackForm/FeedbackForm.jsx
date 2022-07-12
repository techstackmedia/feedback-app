import { useState, useEffect, useContext } from 'react';
import Card from '../../shared/Card';
import Button from '../../shared/Button';
import RatingSelect from '../RatingSelect/RatingSelect';
import FeedbackContext from '../../context/FeedbackContext';

const FeedbackForm = () => {
  const { clickAddHandler, feedbackEdit, clickUpdateHandler } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const [text, setText] = useState('');
  const [rating, setRating] = useState(10);
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const handleTextChange = e => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessage('Text must be more than 10 characters');
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSelect = rating => {
    setRating(rating);
  };
  const handleSubmit = e => {
    e.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback = { text, rating };
      if (feedbackEdit.edit === true) {
        clickUpdateHandler(feedbackEdit.item.id, newFeedback);
      } else {
        clickAddHandler(newFeedback);
      }
    }

    setText('');
  };

  return (
    <Card>
      <h2>How would you rate your service with us?</h2>
      <RatingSelect select={handleSelect} />
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text ?? ''}
            onChange={handleTextChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>

        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
