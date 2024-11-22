import { useNavigate } from "react-router-dom";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Challenge = () => {
  const navigate = useNavigate();

  const handleJoinChallenge = () => {
    navigate("/startLearning");
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); 
  }, []);

  return (
    <section className="bg-blue-100 py-16 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-blue-100 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Main Content */}
      <div className="container mx-auto text-center " data-aos="fade-up">
        <h2 className="text-4xl font-bold mb-6 text-black">
          This Week&apos;s Challenge
        </h2>
        <p className="text-lg mb-8 text-black">
          Cozy up this winter and take on our weekly challenge! Master 50 new words and unlock exclusive rewards.
        </p>

        {/* Challenge Details */}
        <div
          className="bg-white bg-opacity-80 p-6 rounded-lg shadow-lg inline-block"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h3 className="text-3xl font-semibold mb-4 text-blue-700">
            Challenge: Master 50 New Words
          </h3>
          <p className="text-lg text-gray-700">
            Learn and use 50 new words in context. Complete this challenge to earn badges and level up!
          </p>
        </div>

        {/* CTA Button */}
        <div className="mt-8">
          <button
            onClick={handleJoinChallenge}
            className="bg-blue-700 text-white py-3 px-6 rounded-full text-lg font-bold shadow-md hover:bg-blue-800 transition transform hover:scale-105 animate__animated animate__bounceIn"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            Join Challenge
          </button>
        </div>
      </div>
    </section>
  );
};

export default Challenge;
