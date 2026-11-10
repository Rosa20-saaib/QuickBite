
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

function ServicesCTA() {
  return (
    <div className="services-cta">

      <div>
        <h2>Ready to find your new favorite?</h2>

        <p>
          Explore the menu and let us take care of the rest.
        </p>
      </div>

      <Link to="/menu" className="services-cta-link">
        Explore the menu <FaArrowRight aria-hidden="true" />
      </Link>

    </div>
  );
}

export default ServicesCTA;
