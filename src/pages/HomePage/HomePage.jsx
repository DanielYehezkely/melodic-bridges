import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getInstruments } from "../../services/firebase/instrumentsService";
import { PiMusicNotesFill } from "react-icons/pi";

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
    <div className="relative h-screen">
      {/* Background Carousel */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url(${instruments[currentIndex].instrumentImage})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          width: "100vw",
          height: "100vh",
          filter: "blur(5px)",
          transition: "1s ease-in-out",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white">
        {/* Welcome Header */}
        <h1 className="text-center p-5 text-3xl font-bold flex gap-3 mb-5">
          <span className="mt-1 text-3xl">
            <PiMusicNotesFill />
          </span>
          Welcome To Melodic Bridges
          <span className="mt-1 text-3xl">
            <PiMusicNotesFill />
          </span>
        </h1>

        {/* Introduction Text */}
        <div className="flex flex-col text-center w-1/2 leading-[3rem] font-semibold text-2xl gap-7">
          <p>
            Welcome to our website, where the rich tapestry of Arabic and Hebrew
            music comes alive through the instruments that bind these cultures
            together. Discover the soulful sounds and the shared musical
            heritage of these two traditions.
          </p>
          <p>
            Here, you'll find a curated selection of instruments that are
            commonly used in both Arabic and Hebrew songs. Explore the stories
            behind these instruments, see which songs feature them, and immerse
            yourself in the beautiful blend of melodies and rhythms.
          </p>
          <p>
            Whether you're a music enthusiast or just curious about these
            cultures, our platform offers a unique journey through the shared
            musical landscape. Dive in and explore the instruments that create
            the sounds you love.
          </p>
        </div>

        {/* Explore Button */}
        <button className="mt-10">
          <Link
            to="/app"
            className="bg-[#1F2937] text-white px-8 py-4 rounded-lg text-xl cursor-pointer hover:bg-[#2d3b4f]"
          >
            Explore Our Instruments
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
