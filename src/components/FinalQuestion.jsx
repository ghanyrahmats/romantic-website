import { useEffect, useState } from "react";

function FinalQuestion() {
  const [selected, setSelected] = useState(null);
  const [burst, setBurst] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    if (!showThankYou) return undefined;

    const timer = window.setTimeout(() => {
      setShowThankYou(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, [showThankYou]);

  const handleSelect = (value) => {
    if (value === "yes") {
      setSelected("yes");
      setBurst(true);
      window.setTimeout(() => {
        setShowThankYou(true);
      }, 350);
      window.setTimeout(() => setBurst(false), 1200);
      return;
    }

    setSelected("no");
    setBurst(true);
    window.setTimeout(() => setBurst(false), 1200);
  };

  const handleNoHover = () => {
    setNoButtonPosition({
      x: (Math.random() - 0.5) * 220,
      y: (Math.random() - 0.5) * 140,
    });
  };

  if (showThankYou) {
    return (
      <section className="final-question final-question-thankyou">
        <div className="final-question-thankyou-card">
          <div className="thankyou-glow" aria-hidden="true" />
          <p className="thankyou-badge">##</p>
          <h2>Terima kasih, Nis.</h2>
          <p className="thankyou-line">
            Aku janji ga akan ngecewain kamu lagi.
          </p>
          <p className="thankyou-paragraph">
            Sekarang biar aku yang nulis bab selanjutnya dari cerita kita — dengan tindakan, bukan cuma kata-kata. ❤️
          </p>
          <p className="thankyou-signature">ditulis dengan hati, untuk Annisa</p>
          <p className="thankyou-footer">© Ghany · selamanya ada di sini</p>
        </div>
      </section>
    );
  }

  return (
    <section className="final-question">
      <div className="final-question-card">
        <p className="final-question-label">Satu pertanyaan terakhir</p>
        <h2>Masih ada kesempatan</h2>
        <p className="final-question-text">
          Buat aku, Nis?<br />
          Apa pun jawabanmu, aku akan menerimanya dengan lapang. Tapi… aku berharap kamu pilih yang sebelah kiri 🥺
        </p>

        <div className="final-question-actions">
          <button
            type="button"
            className={`final-question-btn ${selected === "yes" ? "selected" : ""}`}
            onClick={() => handleSelect("yes")}
          >
            Yes, I do 💖
          </button>
          <button
            type="button"
            className={`final-question-btn ${selected === "no" ? "selected" : ""}`}
            onClick={() => handleSelect("no")}
            onMouseEnter={handleNoHover}
            onMouseMove={handleNoHover}
            onFocus={handleNoHover}
            style={{
              transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
            }}
          >
            No, but thank you for asking ❤️
          </button>
        </div>

        {burst && (
          <div className="final-question-effects" aria-hidden="true">
            {selected === "yes"
              ? Array.from({ length: 16 }).map((_, index) => <span key={index} className={`confetti confetti-${index + 1}`} />)
              : Array.from({ length: 10 }).map((_, index) => <span key={index} className={`heart-burst heart-${index + 1}`}>❤</span>)}
          </div>
        )}
      </div>
    </section>
  );
}

export default FinalQuestion;
