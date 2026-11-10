
import { Link } from 'react-router-dom';

function HomeHero() {
  return (
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

            <Link
              to="/about"
              className="btn btn-outline-secondary rounded-pill px-4 py-2"
            >
              Learn More
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HomeHero;
