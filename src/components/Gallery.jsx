import { useState } from "react";
import { motion } from "framer-motion";

import foto1 from "../assets/images/foto1.jpg";
import foto2 from "../assets/images/foto2.jpg";
import foto3 from "../assets/images/foto3.jpg";
import foto4 from "../assets/images/foto4.jpg";
import foto5 from "../assets/images/foto5.jpg";
import foto6 from "../assets/images/foto6.jpg";

const storySteps = [
  {
    title: "Pertemuan pertama",
    text: "Dari awal pertemuan, kamu sudah membuat hari-hari terasa lebih berarti.",
    image: foto1,
  },
  {
    title: "Hari-hari kecil",
    text: "Setiap momen sederhana bersama terasa istimewa dan penuh tawa.",
    image: foto2,
  },
  {
    title: "Langkah bersama",
    text: "Kita melangkah bersama melalui banyak hal yang membuat kita semakin dekat.",
    image: foto4,
  },
  {
    title: "Kenangan yang tak terlupakan",
    text: "Ada banyak cerita yang kita bagi dan selalu akan kuingat dengan senyuman.",
    image: foto3,
  },
  {
    title: "Saat hati terasa hangat",
    text: "Kamu membuat dunia terasa lebih lembut dan penuh kehangatan.",
    image: foto5,
  },
  {
    title: "Masih melangkah bersama",
    text: "Dan sampai saat ini, setiap langkah kita tetap punya arti yang besar.",
    image: foto6,
  },
];

function Gallery() {

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery-section">

      <h2 className="gallery-title">
        Perjalanan Kita ❤️
      </h2>

      <p className="gallery-subtitle">
        Setiap langkah, setiap kenangan, dan setiap momen bersama kamu adalah bagian dari cerita yang paling berharga.
      </p>

      <div className="gallery-story-list">

        {storySteps.map((step, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="story-card"
          >
            <div className="story-card-image" onClick={() => setSelectedImage(step.image)}>
              <img src={step.image} alt={step.title} />
            </div>

            <div className="story-card-content">
              <span className="story-step">Langkah {index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </motion.article>
        ))}

      </div>

      {selectedImage && (

        <div
          className="lightbox"
          onClick={() => setSelectedImage(null)}
        >

          <motion.img
            initial={{ scale: .7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            src={selectedImage}
            alt="preview"
            className="lightbox-image"
          />

        </div>

      )}

    </section>
  );

}

export default Gallery;