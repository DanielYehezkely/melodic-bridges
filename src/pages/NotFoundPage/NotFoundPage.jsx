import React from "react";
import { useNavigate } from "react-router-dom";
import { MdMusicNote } from "react-icons/md"; 

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleButtonClicked = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen">
      {/* Left side */}
      <div
        className="w-1/2 h-full"
        style={{
          backgroundImage:
            "url('https://i.pinimg.com/564x/df/94/86/df9486f9a8dfcf382c90627a4e688d0a.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Right side */}
      <div
        className="w-1/2 p-8 flex flex-col text-center items-center gap-10
    "
      >
        <h1 className="text-9xl font-bold text-[#1F2937] tracking-widest flex ">
          4
          <span className="mr-2">
            <MdMusicNote />
          </span>
          4
        </h1>
        <p className="text-4xl mb-4 text-[#1F2937] italic">
          Oops! Looks like you got lost!
        </p>
        <button
          className="px-4 py-2 text-xl bg-[#1F2937] text-white rounded hover:bg-[#33435a]"
          onClick={handleButtonClicked}
        >
          Click here to go back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
