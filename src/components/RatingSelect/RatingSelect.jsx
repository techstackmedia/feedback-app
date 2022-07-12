import { useState } from 'react';

const RatingSelect = ({ select }) => {
  const [selected, setSelected] = useState(10);
  const handleChange = e => {
    setSelected(+e.currentTarget.value);
    select(+e.currentTarget.value);
  };
  const numbers = Array.from(Array(11).keys()).splice(1);
  const selectList = numbers.map(item => {
    return (
      <li key={item}>
        <input
          type="radio"
          name="rating"
          id={`num${item}`}
          checked={selected === item}
          value={`${item}`}
          onChange={handleChange}
        />
        <label htmlFor={`num${item}`}>{item}</label>
      </li>
    );
  });

  return <ul className="rating">{selectList}</ul>;
};

export default RatingSelect;
