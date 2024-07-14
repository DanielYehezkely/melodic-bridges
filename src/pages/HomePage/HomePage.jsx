import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getInstruments } from "../../services/firebase/instrumentsService";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const HomePage = () => {
  const [instruments, setInstruments] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchInstruments = async () => {
      try {
        const instrumentList = await getInstruments();
        setInstruments(instrumentList);
      } catch (error) {
        console.error("Failed to fetch Instruments:", error);
      }
    };

    fetchInstruments();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % instruments.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [instruments.length]);

  if (instruments.length === 0) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-orange-50 p-10 relative h-screen flex flex-col items-center gap-10">
      <h1 className="text-center p-5 text-2xl font-bold">
        Welcome To Melodic Bridges
      </h1>
      <p className="text-center w-1/2 leading-10 font-semibold text-xl">
        Welcome to our website, where the rich tapestry of Arabic and Hebrew
        music comes alive through the instruments that bind these cultures
        together. Discover the soulful sounds and the shared musical heritage of
        these two traditions. Here, you'll find a curated selection of
        instruments that are commonly used in both Arabic and Hebrew songs.
        Explore the stories behind these instruments, see which songs feature
        them, and immerse yourself in the beautiful blend of melodies and
        rhythms. Whether you're a music enthusiast or just curious about these
        cultures, our platform offers a unique journey through the shared
        musical landscape. Dive in and explore the instruments that create the
        sounds you love.
      </p>

      <section className="relative flex items-center justify-center w-2/3 mx-auto">
        <div className="flex items-center justify-center w-full overflow-hidden">
          <div
            className="flex w-full"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transition: "transform 0.5s ease",
            }}
          >
            {instruments.map((instrument, index) => (
              <div key={index} className="w-full flex-shrink-0 text-center">
                <img
                  src={instrument.instrumentImage}
                  alt={instrument.name}
                  className="w-1/3 mx-auto"
                />
                <h2 className="text-xl font-bold">{instrument.name}</h2>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {instruments.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                index === currentIndex ? "bg-white" : "bg-gray-500"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </section>

      <button>
        <Link
          to="/app"
          className="bg-teal-950 text-white p-5 rounded-[20px] text-lg cursor-pointer hover:bg-teal-800"
        >
          Explore Our Instruments
        </Link>
      </button>
    </div>
  );
};

export default HomePage;
