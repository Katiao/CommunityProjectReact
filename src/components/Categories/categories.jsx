import React from "react";
import "./categories.scss";

function Categories({ categories, filterWorks }) {
  return (
    <ul>
      {categories.map((category, index) => {
        return (
          <li key={index} onClick={() => filterWorks(category)}>
            {category}
          </li>
        );
      })}
    </ul>
  );
}

export default Categories;
