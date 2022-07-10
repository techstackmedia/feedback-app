import { createContext, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const FeedbackContext = createContext();
const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch(
      'http://localhost:5000/feedback?_sort=id&_order=asc'
    );
    const data = await response.json();
    setFeedback(data);
  };
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
  const clickEditHandler = item => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  const clickUpdateHandler = (id, itemUpdate) => {
    setFeedback(
      feedback.map(item => {
        return item.id === id ? { ...item, ...itemUpdate } : item;
      })
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        clickAddHandler,
        clickDeleteHandler,
        clickEditHandler,
        clickUpdateHandler,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export { FeedbackProvider };
export default FeedbackContext;
