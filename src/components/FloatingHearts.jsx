export default function FloatingHearts() {

    const hearts = [];

    for (let i = 0; i < 30; i++) {

        hearts.push(

            <span
                key={i}
                className="floating-heart"
                style={{
                    left: Math.random() * 100 + "%",
                    animationDelay: Math.random() * 8 + "s",
                    animationDuration: 6 + Math.random() * 5 + "s"
                }}
            >
                ❤️
            </span>

        );

    }

    return <>{hearts}</>;

}