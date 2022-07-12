import { useState } from 'react';
import Card from '../../Customs/Card';
import Button from '../../Customs/Button';

const FeedbackForm = () => {
  const [text, setText] = useState('');
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

  return (
    <Card>
      <h2>How would rate your service with us?</h2>
      {/* @todo - rating select component */}
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
