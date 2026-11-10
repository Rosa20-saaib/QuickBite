
import { useState } from 'react';
import foods from '../data/product';

function Menu() {
  const [category, setCategory] = useState('All');

  const categories = ['All', 'Burgers', 'Pizza', 'Sides', 'Drinks'];

  const filteredFoods = category === 'All'
    ? foods
    : foods.filter((food) => food.category === category);

  return (
    <div>
      <section className="menu-hero text-center">
        <h1>Our Menu</h1>
        <p>Fresh favorites, made for every craving.</p>
      </section>

      <section className="container my-5">
        <div className="menu-categories mb-5" role="group" aria-label="Filter menu by category">
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

        <div className="row g-4">
          {filteredFoods.map((food) => (
            <div className="col-sm-6 col-lg-4" key={food.id}>
              <article className="card food-card h-100">
                <img
                  src={food.image}
                  className="card-img-top food-img"
                  alt={food.name}
                />

                <div className="card-body text-center">
                  <span className="food-category">{food.category}</span>
                  <h2 className="food-title">{food.name}</h2>
                  <p className="food-description">{food.description}</p>

                  <div className="food-card-footer">
                    <span className="food-price">{food.price}</span>
                    <button type="button" className="food-order-button">
                      Order Now
                    </button>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Menu;
