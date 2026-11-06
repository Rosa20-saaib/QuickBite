import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import foods from '../data/product';

function Home() {
  const popularFoods = [foods[0], foods[4], foods[8], foods[12]];

  return (
    <div className="home-page py-5">
  <section className="container">
    <div className="row align-items-center justify-content-center text-center">
      <div className="col-lg-8">

        <span className="d-inline-block text-uppercase fw-bold home-eyebrow mb-3">
          Lebanese food, made with love
        </span>

        <h1 className="display-5 fw-bold mb-3">
          Gather around the Lebanese table.
        </h1>

        <p className="lead text-secondary mb-4">
          Share generous mezze, savor charcoal-grilled favorites, and finish
          with something sweet—Lebanese hospitality in every bite.
        </p>

        <div className="d-flex justify-content-center flex-wrap gap-3">
          <Link to="/about" className="btn btn-outline-secondary rounded-pill px-4 py-2">
            Learn More
          </Link>
        </div>

      </div>
    </div>
  </section>


      <section className="container pb-5">
        <div className="d-flex justify-content-between align-items-end flex-wrap gap-3 mb-4">
          <div>
            <h2 className="mb-0">Lebanese favorites</h2>
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
                    <strong className="fs-5">{food.price}</strong>
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