import { useState } from 'react';
import Card from '../../Customs/Card';
import Button from '../../Customs/Button';
import RatingSelect from '../RatingSelect/RatingSelect';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [setRating] = useState(10);
  const [message, setMessage] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const handleTextChange = e => {
    if (text.trim().length < 0) {
      setMessage(null);
      setBtnDisabled(true);
    } else if (text.trim().length < 10) {
      setMessage('Text must be more than 10 characters');
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(e.target.value);
  };

  const handleSelect = rating => {
    setRating(rating);
  };

  return (
    <Card>
      <h2>How would you rate your service with us?</h2>
      <RatingSelect handleSelect={handleSelect} />
      <form>
        <div className="input-group">
          <input
            type="text"
            placeholder="Write a review"
            value={text}
            onChange={handleTextChange}
          />
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        <div className="message">{message}</div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
