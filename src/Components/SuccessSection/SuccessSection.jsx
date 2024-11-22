import { useState } from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const SuccessSection = () => {
  const [hasStartedCounting, setHasStartedCounting] = useState(false);

  const { ref, inView } = useInView({
    triggerOnce: true,  
    threshold: 0.5,     
  });

  if (inView && !hasStartedCounting) {
    setHasStartedCounting(true);
  }

  return (
    <section ref={ref} className="bg-blue-100 py-10 p-12 text-center text-white">
      <h1 className="text-4xl font-bold mb-8 animate__animated animate__fadeInLeft text-black " data-aos="fade-up">
        Our Success So Far
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="success-item bg-white text-center p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-lg font-semibold text-black mb-4">User Count</h3>
          <p className="text-3xl font-bold text-blue-600">
            {hasStartedCounting && (
              <CountUp start={0} end={5000} duration={2.5} separator="," />
            )}
          </p>
        </div>
        <div className="success-item bg-white text-center p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-lg font-semibold text-black mb-4">Lesson Count</h3>
          <p className="text-3xl font-bold text-green-600">
            {hasStartedCounting && (
              <CountUp start={0} end={200} duration={2.5} separator="," />
            )}
          </p>
        </div>
        <div className="success-item bg-white text-center p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-lg font-semibold text-black mb-4">Vocabulary Count</h3>
          <p className="text-3xl font-bold text-purple-600">
            {hasStartedCounting && (
              <CountUp start={0} end={15000} duration={2.5} separator="," />
            )}
          </p>
        </div>
        <div className="success-item bg-white text-center p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-lg font-semibold text-black mb-4">Tutorial Count</h3>
          <p className="text-3xl font-bold text-red-600">
            {hasStartedCounting && (
              <CountUp start={0} end={120} duration={2.5} separator="," />
            )}
          </p>
        </div>
      </div>
    </section>
  );
};

export default SuccessSection;
