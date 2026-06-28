import { useEffect, useState } from "react";

export default function Countdown() {
  // Ganti sesuai hari jadian kalian
  const startDate = new Date("2024-02-14T00:00:00");

  const calculateTime = () => {
    const now = new Date();

    let years = now.getFullYear() - startDate.getFullYear();
    let months = now.getMonth() - startDate.getMonth();
    let days = now.getDate() - startDate.getDate();

    if (days < 0) {
      months--;
      const lastMonth = new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      ).getDate();
      days += lastMonth;
    }

    if (months < 0) {
      years--;
      months += 12;
    }

    const diff = now - startDate;

    const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
    const minutes = Math.floor(diff / (1000 * 60)) % 60;
    const seconds = Math.floor(diff / 1000) % 60;

    return {
      years,
      months,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const Card = ({ title, value }) => (
    <div
      className="
        w-24 h-24
        md:w-28 md:h-28
        rounded-2xl
        bg-white/10
        backdrop-blur-lg
        border border-pink-300/30
        shadow-lg
        flex
        flex-col
        justify-center
        items-center
      "
    >
      <h2 className="text-3xl font-bold text-pink-300">
        {value}
      </h2>

      <p className="text-white text-sm mt-2">
        {title}
      </p>
    </div>
  );

  return (
    <section
      className="
        min-h-screen
        flex
        flex-col
        justify-center
        items-center
        px-5
        text-center
      "
    >
      <h1
        className="
          text-4xl
          md:text-5xl
          font-bold
          text-pink-300
          drop-shadow-lg
        "
      >
        ❤️ Lama Kita Bersama ❤️
      </h1>

      <p className="text-white mt-4">
        Sejak 14 Februari 2024
      </p>

      <div
        className="
          grid
          grid-cols-2
          md:grid-cols-3
          gap-6
          mt-12
        "
      >
        <Card title="Tahun" value={time.years} />
        <Card title="Bulan" value={time.months} />
        <Card title="Hari" value={time.days} />
        <Card title="Jam" value={time.hours} />
        <Card title="Menit" value={time.minutes} />
        <Card title="Detik" value={time.seconds} />
      </div>

      <p className="text-pink-200 mt-12 italic">
        "Dan semoga terus bertambah selamanya ❤️"
      </p>
    </section>
  );
}