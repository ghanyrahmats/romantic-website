export default function StarField() {

  const stars = [];

  for (let i = 0; i < 180; i++) {
    stars.push(
      <span
        key={i}
        className="star"
        style={{
          left: Math.random() * 100 + "%",
          top: Math.random() * 100 + "%",
          animationDelay: Math.random() * 5 + "s"
        }}
      />
    );
  }

  return <div className="stars">{stars}</div>;
}