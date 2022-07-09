import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();
const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: 'This is a feedback item 1',
      rating: 10,
    },
    {
      id: 2,
      text: 'This is a feedback item 2',
      rating: 9,
    },
    {
      id: 3,
      text: 'This is a feedback item 3',
      rating: 7,
    },
  ]);

  const clickAddHandler = newFeedback => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };

  const clickDeleteHandler = id => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(prev => {
        return prev.filter(item => {
          return item.id !== id;
        });
      });
    }
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        clickAddHandler,
        clickDeleteHandler,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export { FeedbackProvider };
export default FeedbackContext;
