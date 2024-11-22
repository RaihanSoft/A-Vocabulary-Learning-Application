import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import "animate.css"; // Import Animate.css for animations

const LanguageQuiz = () => {
  const vocab = [
    { word: "Hola", meaning: "Hello", language: "Spanish" },
    { word: "Merci", meaning: "Thank you", language: "French" },
    { word: "Danke", meaning: "Thank you", language: "German" },
    { word: "Ciao", meaning: "Goodbye", language: "Italian" },
    { word: "Bonjour", meaning: "Good morning", language: "French" },
  ];

  const [currentQuestion, setCurrentQuestion] = useState({});
  const [options, setOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    AOS.init();
    generateQuestion();
  }, []);

  const generateQuestion = () => {
    const randomWord = vocab[Math.floor(Math.random() * vocab.length)];
    setCurrentQuestion(randomWord);

    const correctAnswer = randomWord.meaning;
    const incorrectAnswers = vocab
      .filter((item) => item.meaning !== correctAnswer)
      .map((item) => item.meaning);

    const options = [
      correctAnswer,
      ...incorrectAnswers.sort(() => Math.random() - 0.5).slice(0, 3),
    ];
    setOptions(options.sort(() => Math.random() - 0.5));
  };

  const handleAnswer = (selectedAnswer) => {
    if (answered) return;

    const isCorrect = selectedAnswer === currentQuestion.meaning;
    if (isCorrect) {
      setScore(score + 1);
      setMessage("✨ Correct! You're amazing!");
    } else {
      setMessage(`❌ Oops! The correct answer is "${currentQuestion.meaning}".`);
    }
    setAnswered(true);
  };

  const handleNextQuestion = () => {
    setAnswered(false);
    setMessage("");
    generateQuestion();
  };

  return (
    <section className="relative bg-gradient-to-br from-black via-indigo-900 to-black text-white py-16 px-6">
      {/* Header */}
      <div className="text-center mb-12">
        <h2
          className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-yellow-500 animate__animated animate__fadeIn"
          data-aos="zoom-in"
        >
          🌟 Master New Words Through Fun Quizzes
        </h2>

        <p
          className="text-xl sm:text-2xl mt-4 text-gray-300 animate__animated animate__fadeInUp"
          data-aos="fade-up"
        >
          Can you master the meanings? Show off your skills!
        </p>
      </div>

      {/* Quiz Question */}
      <div className="max-w-xl mx-auto text-center mb-10">
        <p
          className="text-4xl font-bold text-yellow-400 animate__animated animate__zoomInUp"
          data-aos="zoom-in-up"
        >
          What does the word <span className="text-gold">&quot;{currentQuestion.word}&quot;</span> mean?
        </p>
      </div>

      {/* Answer Options */}
      <div className="max-w-lg mx-auto grid grid-cols-1 gap-6 mb-10">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option)}
            className="relative py-3 px-6 rounded-lg font-semibold shadow-lg transform transition-all duration-300 ease-in-out hover:scale-110 
            bg-gradient-to-r from-blue-700 via-purple-800 to-purple-900 text-white hover:bg-gradient-to-r hover:from-pink-500 hover:via-yellow-500 hover:to-yellow-700 
            group"
            data-aos="fade-up"
          >
            <span className="absolute inset-0 rounded-lg bg-gradient-to-br from-pink-500 to-yellow-500 opacity-0 group-hover:opacity-30 transition-all duration-300"></span>
            {option}
          </button>
        ))}
      </div>

      {/* Feedback */}
      {answered && (
        <div
          className="text-center mb-10 animate__animated animate__fadeInDown"
          data-aos="fade-down"
        >
          <p className="text-lg font-semibold text-yellow-400">{message}</p>
          <button
            onClick={handleNextQuestion}
            className="mt-6 py-3 px-8 rounded-lg font-bold shadow-xl text-purple-900 bg-gradient-to-r from-yellow-500 to-orange-600 transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-l"
          >
            Next Question
          </button>
        </div>
      )}

      {/* Score */}
      <div className="text-center">
        <p
          className="text-2xl font-semibold text-gold animate__animated animate__fadeInUp"
          data-aos="fade-up"
        >
          Score: <span className="text-white">{score}</span>
        </p>
      </div>
    </section>
  );
};

export default LanguageQuiz;
