import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function LoveLetter({ message, onNext }) {
  return (
    <section className="letterSection">

      <motion.div
        className="letter"

        initial={{
          y:200,
          opacity:0,
          scale:.8
        }}

        animate={{
          y:0,
          opacity:1,
          scale:1
        }}

        transition={{
          duration:1
        }}
      >

        <h2>Teruntuk Annisa Ardelia Zehan&apos;s ❤️</h2>

        <TypeAnimation
          sequence={[
            "",
            700,
            message ? message : "Hai Nisaaa...",
            1200,
            "Aku mungkin masih jauh dari tipe kamu dari segi fisik, tindakan, sifat, dan cara ngetreat kamu ga sebagus mantan kamu.",
            2200,
            "Tapi aku selalu berusaha menjadi yang terbaik buat kamu nis...",
            2600,
            "Aku sangat bahagia banget kenal kamu, deket kamu, bahkan jalan bareng kamu nis.",
            2600,
            "Aku harap itu tetep berlanjut sampai kita di titik yang lebih baik.",
            2200,
            "Aku emang tidak pandai yapping dan berekspresi, tolong maklumi karena aku melakukan apa-apa aku bisa sendiri ☺️",
            2800,
            "Tapi aku kasih tau cinta ke kamu lewat tindakan aku yang belum pernah aku kasih ke siapapun nis.",
            2800,
            "Aku ga pernah sama sekali main-main sama kamu, aku serius sama kamu nis.",
            2600,
            "Banyak hal yang ingin aku lakuin bareng kamu, tapi sejak kejadian itu aku bener-bener menyesal nis. Aku Minta Maaf Yaa..",
            2600,
            "Mungkin kamu ga se-excited dulu gara-gara aku dan kamu seperti terpaksa bareng aku.",
            2600,
            "Masihkah ada kesempatan buat aku nis? Kalau dipaksa juga ga bagus nis, kasian kamunya.",
            2800,
            "Tolong bilang ke aku yaa...",
            2200,
            "Aku sayang banget sama kamu dan cinta banget sama kamu, you are the best in my life, no one can replace you...",
            2600,
            "I Love You moreeee ❤️",
            2600
          ]}
          wrapper="p"
          speed={45}
          repeat={0}
        />

        <button
          type="button"
          onClick={() => {
            if (typeof onNext === "function") {
              onNext();
            }
          }}
        >
          Continue ➜
        </button>

      </motion.div>

    </section>
  );
}