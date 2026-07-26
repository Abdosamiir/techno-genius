import { cards } from "../data/data";

const CitiesCards = () => {
  return (
    <div className="cities-cards">
      {cards.map(({ title, image, description }) => (
        <article className="city-card" key={title}>
          <div className="city-card__image">
            <img src={image} alt={title} />
          </div>
          <div className="city-card__content">
            <span className="city-card__label">Featured destination</span>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </article>
      ))}
    </div>
  );
};

export default CitiesCards;
