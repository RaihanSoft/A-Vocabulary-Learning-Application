import { useState } from "react";
import { FaVolumeUp } from "react-icons/fa";
import { useLoaderData, useParams, Link } from "react-router-dom";
import "animate.css"; 

const Lesson = () => {
  const { lesson_no } = useParams(); 
  const { lessonVocabularies } = useLoaderData();
  const [modalData, setModalData] = useState(null); 

  const openModal = (vocab) => {
    setModalData(vocab);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalData(null);
  };

  // Function to speak the vocabulary word
  const speakWord = (word) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(word);
      utterance.lang = "en-US"; 
      speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser does not support text-to-speech.");
    }
  };

  return (
    <div className="p-6 animate__animated animate__fadeIn animate__fast">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gradient bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-600">
        Lesson {lesson_no}
      </h1>

      {/* Display vocabularies for the lesson */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {lessonVocabularies.length === 0 ? (
          <p>No vocabularies found for this lesson.</p>
        ) : (
          lessonVocabularies.map((vocab) => (
            <div
              key={vocab.id}
              className={`p-6 rounded-lg shadow-xl transition-transform duration-300 transform hover:scale-105 ${
                vocab.difficulty === "easy"
                  ? "bg-gradient-to-r from-green-400 to-green-600 text-white"
                  : vocab.difficulty === "medium"
                  ? "bg-gradient-to-r from-orange-400 to-orange-600 text-white"
                  : "bg-gradient-to-r from-red-400 to-red-600 text-white"
              } animate__animated animate__fadeIn`}
            >
              <h3 className="font-semibold text-3xl text-black flex items-center justify-between">
                {vocab.word}
                <button
                  onClick={() => speakWord(vocab.word)}
                  className="p-2 bg-blue-500 text-white rounded-full shadow-lg transform hover:scale-110 transition-all"
                  aria-label={`Speak ${vocab.word}`}
                >
                  <FaVolumeUp className="text-xl" />
                </button>
              </h3>
              <p className="mt-2 text-xl text-black">
                <strong>Meaning:</strong> {vocab.meaning}
              </p>
              <p className=" text-xl text-black">
                <strong>Pronunciation:</strong> {vocab.pronunciation}
              </p>
              <p className= "text-xl text-black">
                <strong>Part of Speech:</strong> {vocab.part_of_speech}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click event
                  openModal(vocab);
                }}
                className="mt-4 p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition duration-300"
              >
                When to Say
              </button>
            </div>
          ))
        )}
      </div>

      {/* Modal for "When to Say" */}
      {modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-20 animate__animated animate__fadeIn animate__faster">
          <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-8 rounded-lg shadow-2xl max-w-lg mx-auto animate__animated animate__zoomIn animate__faster">
            <h3 className="font-semibold text-3xl text-white">{modalData.word}</h3>
            <p className="text-white">
              <strong>Meaning:</strong> {modalData.meaning}
            </p>
            <p className="text-white">
              <strong>When to Say:</strong> {modalData.when_to_say}
            </p>
            <p className="text-white">
              <strong>Example:</strong> {modalData.example}
            </p>
            <button
              onClick={closeModal}
              className="mt-6 p-2 bg-red-600 hover:bg-red-700 text-white rounded-md shadow-lg transform hover:scale-105 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* "Back to Lesson" button */}
      <Link to="/startLearning">
        <button className="mt-6 p-3 bg-gray-800 text-white rounded-full shadow-lg transform hover:scale-105 transition-all">
          Back to Lesson
        </button>
      </Link>
    </div>
  );
};

export default Lesson;
