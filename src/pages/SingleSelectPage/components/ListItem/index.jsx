export const ListItem = ({ item, selected, onSelect }) => {
  return (
    <div
      className={`panel${selected ? ' panel--selected' : ''}`}
      onClick={() => onSelect(item.id)}
    >
      {item.name}
      {selected && <div>calorie: {item.calories}</div>}
    </div>
  );
};
