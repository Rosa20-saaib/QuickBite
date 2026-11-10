function MenuCategories({ categories, category, setCategory }) {
  return (
    <div
      className="menu-categories mb-5"
      role="group"
      aria-label="Filter menu by category"
    >
      {categories.map((item) => (
        <button
          key={item}
          type="button"
          className={`menu-category-button ${
            category === item ? 'active' : ''
          }`}
          aria-pressed={category === item}
          onClick={() => setCategory(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default MenuCategories;