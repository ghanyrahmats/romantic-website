export default function FallingPetals() {

    const petals = [];

    for (let i = 0; i < 25; i++) {

        petals.push(

            <span
                key={i}
                className="petal"
                style={{
                    left: Math.random() * 100 + "%",
                    animationDelay: Math.random() * 10 + "s",
                    animationDuration: 8 + Math.random() * 5 + "s"
                }}
            >
                🌸
            </span>

        );

    }

    return <>{petals}</>;

}