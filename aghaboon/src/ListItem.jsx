import React from 'react';
import { motion } from "framer-motion";
import { container, item } from "./animated";

const List = ({ items, subitems }) => {
  return (
    <motion.div variants={container} initial="hidden" animate="show">
      <motion.div variants={item}>
        {Array.isArray(items) && (
          <ul className="list-disc list-inside text-xl font-semibold ps-3">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </motion.div>

      <motion.div variants={item}>
        {Array.isArray(subitems) && (
          <ul className="list-decimal list-inside text-xl font-semibold ps-9 ">
            {subitems.map((subitem, index) => (
              <li key={index}>{subitem}</li>
            ))}
          </ul>
        )}
      </motion.div>

    </motion.div>
  );
}

export default List;
