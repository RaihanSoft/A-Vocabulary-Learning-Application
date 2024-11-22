import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // AOS CSS
import "animate.css"; // Animate.css for animations

const OurMission = () => {
  const steps = [
    {
      title: 'Interactive Lessons',
      description: 'Learn vocabulary with themed lessons tailored to real-life scenarios.',
      icon: '📚',
    },
    {
      title: 'Pronunciation Practice',
      description: 'Master pronunciation with interactive audio guides for each word.',
      icon: '🔊',
    },
    {
      title: 'Engaging Examples',
      description: 'Understand words in context with sentence examples.',
      icon: '✍️',
    },
    {
      title: 'Playful Quizzes and Games',
      description: 'Test your knowledge through fun activities like bingo challenges.',
      icon: '🎮',
    },
    {
      title: 'Track Your Progress',
      description: 'Monitor your growth and celebrate milestones.',
      icon: '📈',
    },
    {
      title: 'Customizable Learning Paths',
      description: 'Choose lessons based on difficulty or themes for personalized learning.',
      icon: '🛠️',
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with custom duration
  }, []);

  return (
    <section className="about-section px-6 py-12 bg-blue-100 ">
      <h1
        className="text-4xl font-bold text-center mb-8 text-black animate__animated animate__fadeIn "
        data-aos="fade-up"
      >
        Our Mission
      </h1>
      <div className="mission mb-12 text-center">
        <p className="text-lg text-black animate__animated animate__fadeInRight" data-aos="fade-up">
          At <strong>Lingo Bingo</strong>, our mission is to make learning new vocabulary fun, engaging, and accessible for everyone. Expanding your vocabulary opens new opportunities for growth and communication.
        </p>
      </div>
      <div className="learning-steps grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((step, index) => (
          <div
            key={index}
            className="step-item bg-gradient-to-r from-teal-500 via-blue-400 to-indigo-500 text-white shadow-lg rounded-lg p-6 text-center animate__animated animate__fadeIn"
            data-aos="zoom-in"
            data-aos-delay={`${index * 100}`} 
          >
            <div className="icon text-5xl mb-4">{step.icon}</div>
            <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
            <p className="text-gray-200">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurMission;
