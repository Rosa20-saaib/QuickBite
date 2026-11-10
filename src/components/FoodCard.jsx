function FoodCard({ food }) {
  return (
    <div className="col-sm-6 col-lg-4">
      <article className="card food-card h-100">
        <img
          src={food.image}
          className="card-img-top food-img"
          alt={food.name}
        />

        <div className="card-body text-center">
          <span className="food-category">{food.category}</span>

          <h2 className="food-title">{food.name}</h2>

          <p className="food-description">
            {food.description}
          </p>

          <div className="food-card-footer">
            <span className="food-price">{food.price}</span>

            <button
              type="button"
              className="food-order-button"
            >
              Order Now
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default FoodCard;