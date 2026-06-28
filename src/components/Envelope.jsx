import { motion } from "framer-motion";

export default function Envelope({ onOpen }) {
  return (
    <section className="envelopeSection">
      <motion.div
        className="envelope"
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onOpen}
      >
        <div className="envelope-top" />
        <div className="envelope-body" />
        <div className="heartSeal">❤️</div>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
      >
        Klik amplop untuk membuka pesan 💌
      </motion.h2>
    </section>
  );
}