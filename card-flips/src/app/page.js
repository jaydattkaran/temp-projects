
import Card from "./Card";

export default function Home() {
  return (
    <>
      <div className="container">
        <section className="hero">
          <h1>
            Keep scrolling to <br/> reveal the cards
          </h1>
        </section>
        <section className="cards">
          {[...Array(4)].map((_, index) => (
            <Card
              key={index}
              id={`card-${index + 1}`}
              frontSrc="/card.jpeg"
              frontAlt="Card Image"
              backText="Your card details appear here"
            />
          ))}
        </section>
        <section className="footer">
          <h1>Footer or Upcoming section</h1>
        </section>
      </div>
    </>
  );
}
