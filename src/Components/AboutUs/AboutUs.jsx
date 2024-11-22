import { useEffect } from "react";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Aos from "aos";

const AboutUs = () => {
  useEffect(() => {
    Aos.init({ duration: 1200, easing: "ease-in-out" });
  }, []);

  const projects = [
    { title: "Lingo Bingo", description: "Interactive vocabulary learning app with gamified lessons.", features: ["200+ Spanish words", "Gamified quizzes", "Progress tracking"] },
    { title: "Art Portfolio", description: "Showcase and manage artwork with CRUD functionality.", features: ["Authentication", "CRUD functionality", "Responsive design"] },
    { title: "Dream 11 Cricket Team", description: "Fantasy sports platform with real-time team updates.", features: ["Real-time data", "User-friendly team builder", "Interactive UI"] },
    { title: "Car Get", description: "Car rental and purchase platform.", features: ["Role-based dashboard", "Secure payment gateway", "Advanced filters"] },
    { title: "Fitness Tracker", description: "Track fitness goals and health insights.", features: ["Activity monitoring", "Health insights", "Custom fitness plans"] },
    { title: "E-Shop", description: "E-commerce platform with product recommendations.", features: ["Product filtering", "Secure payments", "Wishlist and cart"] },
    { title: "Event Planner", description: "Plan and manage events collaboratively.", features: ["Event scheduling", "Team collaboration", "Interactive dashboard"] },
    { title: "Movie Mania", description: "Platform for browsing and reviewing movies.", features: ["User reviews", "Trending movies", "Dynamic search"] },
    { title: "Travel Buddy", description: "Plan trips with real-time destination guides.", features: ["Booking management", "Travel guides", "User recommendations"] },
    { title: "EduLearn Platform", description: "Online learning platform with certifications.", features: ["Video lectures", "Quizzes", "Certification"] },
    { title: "Foodie Delight", description: "Recipe-sharing platform with ratings.", features: ["User-submitted recipes", "Rating system", "Cooking tips"] },
    { title: "Tech Savvy", description: "Tech blog with trending articles.", features: ["User blogs", "Social sharing", "Advanced search"] },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-black py-20 px-6 md:px-20 text-white">
      <div className="container mx-auto">
        {/* Header */}
        <div data-aos="fade-down" className="text-center mb-16">
          <h2 className="text-5xl font-extrabold animate__animated animate__fadeInDown">About Us</h2>
          <p className="text-lg mt-4 text-gray-400">
            Creative and dedicated web developer passionate about creating interactive, user-friendly applications.
          </p>
        </div>

        {/* About Us Section */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            data-aos="fade-right"
            className="bg-gradient-to-r from-purple-800 via-purple-600 to-purple-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:bg-gradient-to-bl"
          >
            <h3 className="text-3xl font-semibold text-purple-300">Who We Are</h3>
            <p className="mt-4 leading-relaxed text-gray-200">
              We specialize in building user-friendly, high-performance, and responsive web applications using modern technologies like React, Next.js, and Tailwind CSS. Our projects reflect creativity, attention to detail, and a strong passion for solving user problems. Collaboration, adaptability, and continuous learning are core to our work philosophy.
            </p>
          </motion.div>
          <motion.div
            data-aos="fade-left"
            className="bg-gradient-to-r from-blue-800 via-blue-600 to-blue-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105 hover:bg-gradient-to-br"
          >
            <h3 className="text-3xl font-semibold text-blue-300">Skills</h3>
            <ul className="mt-4 grid grid-cols-2 gap-4 text-gray-200">
              <li>JavaScript (ES6+)</li>
              <li>React.js & Next.js</li>
              <li>Tailwind CSS & Bootstrap</li>
              <li>Node.js & Express.js</li>
              <li>MongoDB</li>
              <li>Firebase Authentication</li>
              <li>Performance Optimization</li>
              <li>Responsive Design</li>
            </ul>
          </motion.div>
        </div>

        {/* Projects Section */}
        <div data-aos="fade-up" className="mt-20">
          <h3 className="text-3xl font-semibold text-center">Projects</h3>
          <div className="mt-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 text-gray-100 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:scale-110 hover:rotate-1 hover:bg-gradient-to-tl"
                whileHover={{
                  scale: 1.1,
                  rotate: 3,
                  boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.6)",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <div className="p-6">
                  <h4 className="text-xl font-bold text-purple-400">{project.title}</h4>
                  <p className="mt-2 text-gray-300">{project.description}</p>
                  <ul className="mt-4 text-sm text-gray-400">
                    {project.features.map((feature, idx) => (
                      <li key={idx}>- {feature}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
