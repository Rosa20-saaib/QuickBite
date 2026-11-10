function About() {
  return (
    <div>
      <section className="about-hero text-center">
        <h1>About QuickBite</h1>
        <p>Good food, great taste, and fast delivery!</p>
      </section>

      <section className="container my-5">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800"
              alt="Restaurant"
              className="img-fluid rounded"
            />
          </div>

          <div className="col-md-6 mt-4 mt-md-0">
            <h2>Who We Are</h2>
            <p>
              QuickBite is an online food ordering platform
              that makes ordering your favorite meals easy.
            </p>

            <p>
              Our goal is to provide delicious food and
              a simple ordering experience for everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="why-us text-center py-5">
        <div className="container">
          <h2>Our Mission</h2>
          <p>
            To make food ordering simple, convenient,
            and enjoyable.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;