
function ServiceCard({ icon, title, description, number }) {
  return (
    <article className="service-card h-100">

      <div className="service-card-top">

        <span className="service-icon" aria-hidden="true">
          {icon}
        </span>

        <span className="service-number">
          {number}
        </span>

      </div>

      <h2>{title}</h2>

      <p>{description}</p>

      <span className="service-accent" aria-hidden="true" />

    </article>
  );
}

export default ServiceCard;
