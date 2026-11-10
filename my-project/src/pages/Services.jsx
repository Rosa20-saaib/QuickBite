
import { Link } from 'react-router-dom';
import { FaArrowRight, FaLeaf, FaTruck, FaUtensils } from 'react-icons/fa';

function Services() {
  const services = [
    {
      icon: <FaUtensils />,
      title: 'Easy Online Ordering',
      description:
        'Explore our menu and order your favorite meals in just a few clicks.',
      number: '01'
    },
    {
      icon: <FaTruck />,
      title: 'Fast, Reliable Delivery',
      description:
        'We bring your order straight to your door, fresh and ready to enjoy.',
      number: '02'
    },
    {
      icon: <FaLeaf />,
      title: 'Freshly Made Food',
      description:
        'Every meal is prepared with care and quality ingredients.',
      number: '03'
    }
  ];

  return (
    <main className="services-page">
      <section className="services-hero text-center">
        <span className="services-eyebrow">GOOD FOOD, MADE SIMPLE</span>
        <h1>Great food, right when you want it.</h1>
        <p>
          From choosing your meal to the first bite, QuickBite makes every step
          easy, fresh, and enjoyable.
        </p>
      </section>

      <section className="container services-content">
        <div className="row g-4">
          {services.map((service) => (
            <div className="col-md-4" key={service.title}>
              <article className="service-card h-100">
                <div className="service-card-top">
                  <span className="service-icon" aria-hidden="true">
                    {service.icon}
                  </span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <span className="service-accent" aria-hidden="true" />
              </article>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <div>
            <h2>Ready to find your new favorite?</h2>
            <p>Explore the menu and let us take care of the rest.</p>
          </div>
          <Link to="/menu" className="services-cta-link">
            Explore the menu <FaArrowRight aria-hidden="true" />
          </Link>
        </div>
      </section>
    </main>
  );
}

export default Services;
