import { useEffect, useState } from 'react';
import { ListItem } from '../ListItem';

export const List = () => {
  const [items, setItems] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  
  useEffect(() => {
      const fetchItems = async () => {
        const response = await fetch('http://localhost:3000/items');
        const data = await response.json();
        setItems(data);
    };

    fetchItems();
  }, []);

  if (items === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className="list">
      {items.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          selected={item.id === selectedId}
          onSelect={setSelectedId}
        />
      ))}
    </div>
  );
};
