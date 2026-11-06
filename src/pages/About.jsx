
function About() {
  return (
    <div className="about-page">

     
      <section className="about-hero text-center">
        <div className="container">
        
          <h1>More Than Food, It's an Experience.</h1>
          <p>
            Bringing people together through the authentic flavors
            and warm hospitality of Lebanon.
          </p>
        </div>
      </section>

     
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

    
    

    </div>
  );
}

export default About;
