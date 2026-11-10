function WhyUs() {
  return (
    <section className="why-us py-5">
      <div className="container text-center">

        <h2 className="about-heading mb-5">
          What Makes Us Special?
        </h2>

        <div className="row g-4">

          <div className="col-md-4">
            <div className="about-card">
              <div className="about-icon">🥗</div>

              <h4>Fresh Ingredients</h4>

              <p>
                We use fresh, quality ingredients to bring
                the best flavors to your table.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-card">
              <div className="about-icon">❤️</div>

              <h4>Made With Love</h4>

              <p>
                Every dish is prepared with passion,
                care, and attention to detail.
              </p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="about-card">
              <div className="about-icon">🍽️</div>

              <h4>Lebanese Tradition</h4>

              <p>
                We celebrate authentic Lebanese flavors
                and the joy of sharing food.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default WhyUs;