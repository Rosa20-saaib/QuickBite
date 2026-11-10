import { useState } from 'react';

import foods from '../data/product';

import MenuHero from '../components/MenuHero';
import MenuCategories from '../components/MenuCategories';
import FoodCard from '../components/FoodCard';

function Menu() {
  const [category, setCategory] = useState('All');

  const categories = [
    'All',
    'Mezze',
    'Grills & Classics',
    'Manakish',
    'Drinks & Sweets'
  ];

  const filteredFoods = category === 'All'
    ? foods
    : foods.filter((food) => food.category === category);

  return (
    <div>
      <MenuHero />

      <section className="container my-5">

        <MenuCategories
          categories={categories}
          category={category}
          setCategory={setCategory}
        />

        <div className="row g-4">
          {filteredFoods.map((food) => (
            <FoodCard
              key={food.id}
              food={food}
            />
          ))}
        </div>

      </section>
    </div>
  );
}

export default Menu;