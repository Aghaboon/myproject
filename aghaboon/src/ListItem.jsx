import React from 'react';


const List = ({ items, subitems }) => {
  return (
    <div>
      <div>
        {Array.isArray(items) && (
          <ul className="list-disc list-inside text-xl font-semibold ps-3">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </div>

      <div>
        {Array.isArray(subitems) && (
          <ul className="list-decimal list-inside text-xl font-semibold ps-9 ">
            {subitems.map((subitem, index) => (
              <li key={index}>{subitem}</li>
            ))}
          </ul>
        )}
      </div>

    </div>
  );
}

export default List;
