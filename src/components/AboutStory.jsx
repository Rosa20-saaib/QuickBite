function AboutStory() {
  return (
    <section className="container py-5">
      <div className="row align-items-center g-5">

        <div className="col-lg-6">
          <img
            src="https://www.lebanontraveler.com/wp-content/uploads/2022/11/locanda-corisini-lebanon-traveler-tourism.jpg"
            alt="Lebanese restaurant"
            className="img-fluid about-image"
          />
        </div>

        <div className="col-lg-6">
          <span className="about-label">WHO WE ARE</span>

          <h2 className="about-heading">
            A Taste of Lebanon in Every Bite
          </h2>

          <p className="about-text">
            QuickBite is more than just a restaurant. It's a place
            where delicious food, fresh ingredients, and Lebanese
            traditions come together.
          </p>

          <p className="about-text">
            From traditional mezze and freshly baked manakish
            to charcoal-grilled favorites, every dish is prepared
            with care and passion.
          </p>

          <p className="about-text">
            Our goal is simple: to make every meal special
            and every customer feel at home.
          </p>
        </div>

      </div>
    </section>
  );
}

export default AboutStory;