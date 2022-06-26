import { useState } from 'react';
import Card from '../../Customs/Card';
import Button from '../../Customs/Button';
const FeedbackForm = () => {
  const [text, setText] = useState('');
  const handleTextChange = e => {
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
          <Button type="submit">Send</Button>
        </div>
      </form>
    </Card>
  );
};

export default FeedbackForm;
