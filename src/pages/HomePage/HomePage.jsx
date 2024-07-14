import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
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
      <button className="bg-teal-950 text-white p-5 rounded-[20px] text-lg cursor-pointer hover:bg-teal-800">
        <Link to="/app">Explore Our Instruments</Link>
      </button>
    </div>
  );
};

export default HomePage;
