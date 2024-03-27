import { useEffect, useState } from 'react';
import { ListItem } from '../ListItem';

export const List = () => {
  const [items, setItems] = useState(null);
  const [selectedCount, setSelectedCount] = useState(0);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:3000/items');
      const data = await response.json();
      setItems(data);
    };

    fetchItems();
  }, []);

  const handleItemSelected = isSelected => {
    if (isSelected) {
      setSelectedCount(selectedCount+1);
    } else {
      setSelectedCount(selectedCount-1);
    }
  }

  if (items === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
    <>{selectedCount}</>
      <div className="list">
        {items.map((item) => (
          <ListItem key={item.id} item={item} onSelected={handleItemSelected}/>
        ))}
      </div>
    </>
  );
};
