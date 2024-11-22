import { useState, useEffect } from "react";
import 'animate.css';

const AnimatedSlider = () => {
  const sliders = [
    {
      img: "https://i.ibb.co/s3W5QGB/2.jpg",
      title: "Boost Your Spanish Vocabulary",
      des: "Expand your Spanish vocabulary with fun and interactive lessons tailored to all levels.",
    },
    {
      img: "https://i.ibb.co/6YRpWzF/3.jpg",
      title: "Master Spanish Grammar",
      des: "Learn Spanish grammar rules to boost your confidence and fluency in speaking and writing.",
    },
    {
      img: "https://i.ibb.co/N6sTY2M/4.jpg",
      title: "Learn Spanish Online",
      des: "Engage in interactive Spanish lessons that are designed to enhance your vocabulary and communication skills.",
    },
    {
      img: "https://i.ibb.co/ScYLnH3/RS9260-Getty-Images-1324510963-1440x960.jpg",
      title: "Learn Spanish with Ease",
      des: "Master Spanish vocabulary and phrases in a simple, engaging way to improve your language skills.",
    },
  ];

  const [currentSlider, setCurrentSlider] = useState(0);

  // Auto change slider every 5 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlider((prev) => (prev === sliders.length - 1 ? 0 : prev + 1));
    }, 2000); // 5 seconds interval

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

  return (
    <div className="relative  w-full h-[600px] overflow-hidden">
      {/* Main Banner */}
      <div
        className="w-full h-full bg-cover bg-center duration-500 transform animate__animated animate__fadeIn"
        style={{
          backgroundImage: `url(${sliders[currentSlider].img})`,
        }}
      >
        {/* Overlay for Darkening */}
        <div className="absolute inset-0 bg-black/30"></div>

        {/* Text Content with Dynamic Styling */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 text-white z-10 max-w-xl -ml-8  w-full animate__animated animate__fadeIn animate__delay-1s">
          <div className="bg-gradient-to-t from-black/60 via-transparent to-transparent p-8 rounded-3xl shadow-xl backdrop-blur-lg">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center mb-6">{sliders[currentSlider].title}</h1>
            <p className="text-lg md:text-xl text-center">{sliders[currentSlider].des}</p>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="absolute hidden lg:flex top-1/2 right-4 transform -translate-y-1/2 flex gap-6 z-10 animate__animated animate__fadeIn animate__delay-1s">
          {sliders.map((slider, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlider(index)}
              className={`w-20 h-20 md:w-24 md:h-24 bg-cover bg-center rounded-xl cursor-pointer transition-transform ${currentSlider === index
                ? "ring-4 ring-blue-500 transform scale-110"
                : "opacity-80 hover:opacity-100"
              }`}
              style={{ backgroundImage: `url(${slider.img})` }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedSlider;
