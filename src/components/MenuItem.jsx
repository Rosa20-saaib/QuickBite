import { Link } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
function MenuItem({ food }) {
  return (
   <div className="col-sm-6 col-lg-3">

      <div className="card border-0 shadow-sm h-100 overflow-hidden">

        <img
          src={food.image}
          alt={food.name}
          className="card-img-top"
          style={{ height: '220px', objectFit: 'cover' }}
        />

        <div className="card-body d-flex flex-column">

          <div className="d-flex justify-content-between align-items-center mb-2">

            <span className="badge bg-light text-dark">
              {food.category}
            </span>

            <span className="text-warning">
              <FaStar />
            </span>

          </div>

          <h5 className="card-title">{food.name}</h5>

          <p className="card-text text-secondary flex-grow-1">
            {food.description}
          </p>

          <div className="d-flex justify-content-between align-items-center mt-3">

            <strong className="fs-5">{food.price}</strong>

            <Link to="/menu" className="btn btn-dark btn-sm rounded-pill">
              Add
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
}

export default MenuItem;