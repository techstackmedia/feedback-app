import { createContext, useState, useEffect } from 'react';

const FeedbackContext = createContext();
const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  useEffect(() => {
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    const response = await fetch('/feedback?_sort=id&_order=desc');
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  };
  const clickAddHandler = async newFeedback => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    });
    const data = await response.json();
    // newFeedback.id = uuidv4();
    setFeedback([data, ...feedback]);
  };
  const clickDeleteHandler = async id => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' });
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
  const clickUpdateHandler = async (id, itemUpdate) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(itemUpdate),
    });

    const data = await response.json();
    setFeedback(
      feedback.map(item => {
        return item.id === id ? { ...item, ...data } : item;
      })
    );
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
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
