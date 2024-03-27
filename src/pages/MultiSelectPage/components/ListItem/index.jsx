import { useState } from 'react';

export const ListItem = ({ item, onSelected }) => {
  const [selected, setSelected] = useState(false);
  
  const toggleSelected = () => {
    const newSelected = !selected;
    setSelected(newSelected);
    onSelected(newSelected);
  };

  return (
    <div
      className={`panel${selected ? ' panel--selected' : ''}`}
      onClick={toggleSelected}
    >
      {item.name}
    </div>
  );
};
