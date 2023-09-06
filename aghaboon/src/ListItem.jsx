import React from 'react';

const List = ({ items, subitems }) => {
  return (
    <div>
      {Array.isArray(items) && (
        <ul className="list-disc list-inside text-xl font-semibold">
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {Array.isArray(subitems) && (
        <ul className="list-decimal list-inside text-xl font-semibold ps-6 ">
          {subitems.map((subitem, index) => (
            <li key={index}>{subitem}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default List;
