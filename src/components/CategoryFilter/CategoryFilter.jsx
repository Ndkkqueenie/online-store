import React from 'react';

const CategoryFilter = ({ products, onCategoryChange }) => {
  const categories = [...new Set(products.map((product) => product.category))];

  const handleCategoryChange = (e) => {
    onCategoryChange(e.target.value);
  };

  return (
    <div>
      <label htmlFor="categorySelect">Select a category:</label>
      <select id="categorySelect" onChange={handleCategoryChange}>
        <option value="">All Categories</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;