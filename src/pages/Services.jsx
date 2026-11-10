
import { FaLeaf, FaTruck, FaUtensils } from 'react-icons/fa';

import ServiceCard from '../components/ServiceCard';
import ServicesCTA from '../components/ServicesCTA';

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

      <section className="container services-content">

        <div className="row g-4">

          {services.map((service) => (
            <div className="col-md-4" key={service.title}>

              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                number={service.number}
              />

            </div>
          ))}

        </div>

        <ServicesCTA />

      </section>

    </main>
  );
}

export default Services;
