
import foods from '../data/product';

import HomeHero from '../components/HomeHero';
import MenuItem from '../components/MenuItem';

function Home() {

  const popularFoods = [
    foods[0],
    foods[4],
    foods[8],
    foods[12]
  ];

  return (
    <div className="home-page py-5">

      {/* Hero Section */}
      <HomeHero />

      {/* Popular Foods Section */}
      <section className="container pb-5">

        <div className="d-flex justify-content-between align-items-end flex-wrap gap-3 mb-4">

          <div>
            <h2 className="mb-0">Lebanese favorites</h2>
          </div>

        </div>

        <div className="row g-4">

          {popularFoods.map((food) => (
            <MenuItem
              key={food.id}
              food={food}
            />
          ))}

        </div>

      </section>

    </div>
  );
}

export default Home;
