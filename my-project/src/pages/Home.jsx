import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar } from 'react-icons/fa';

function Home() {
  const popularFoods = [
    {
      id: 1,
      name: 'Classic Burger',
      description: 'Juicy beef, cheese and fresh vegetables.',
      price: 8.99,
      image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600',
      category: 'Burger'
    },
    {
      id: 2,
      name: 'Pepperoni Pizza',
      description: 'Fresh pizza topped with pepperoni.',
      price: 12.99,
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600',
      category: 'Pizza'
    },
    {
      id: 3,
      name: 'French Fries',
      description: 'Golden and crispy potato fries.',
      price: 3.99,
      image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600',
      category: 'Sides'
    },
    {
      id: 4,
      name: 'Strawberry Smoothie',
      description: 'A creamy blend of strawberries and yogurt.',
      price: 5.49,
      image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600',
      category: 'Drinks'
    }
  ];

  return (
    <div className="home-page py-5">
      <section className="container">
        <div className="row align-items-center g-4">
          <div className="col-lg-6">
            <span className="d-inline-block text-uppercase fw-bold text-warning mb-3">
              Fresh &amp; Fast
            </span>
            <h1 className="display-5 fw-bold mb-3">Good food for every day.</h1>
            <p className="lead text-secondary mb-4">
              QuickBite brings together fresh ingredients, comfort food classics,
              and fast delivery in one simple experience.
            </p>

            <div className="d-flex flex-wrap gap-3">
             
              <Link to="/about" className="btn btn-outline-secondary rounded-pill px-4 py-2">
                Learn More
              </Link>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900"
              alt="Delicious burger"
              className="img-fluid rounded-4 shadow-sm"
            />
          </div>
        </div>
      </section>

      <section className="container pb-5">
        <div className="d-flex justify-content-between align-items-end flex-wrap gap-3 mb-4">
          <div>
            <h2 className="mb-0">Popular meals &amp; drinks</h2>
          </div>
        </div>

        <div className="row g-4">
          {popularFoods.map((food) => (
            <div className="col-sm-6 col-lg-3" key={food.id}>
              <div className="card border-0 shadow-sm h-100 overflow-hidden">
                <img src={food.image} alt={food.name} className="card-img-top" style={{ height: '220px', objectFit: 'cover' }} />
                <div className="card-body d-flex flex-column">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="badge bg-light text-dark">{food.category}</span>
                    <span className="text-warning">
                      <FaStar />
                    </span>
                  </div>

                  <h5 className="card-title">{food.name}</h5>
                  <p className="card-text text-secondary flex-grow-1">{food.description}</p>

                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <strong className="fs-5">${food.price.toFixed(2)}</strong>
                    <Link to="/menu" className="btn btn-dark btn-sm rounded-pill">
                      Add
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

     
    </div>
  );
}

export default Home;