import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "150px",
  marginTop: "20px",
  opacity: "0.7",
  
};
const musicWord = {
  padding: "20px",
  margin: "20px",
  color: "white",
};

const music = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space around",
  fontSize: "20px",
};
const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1524779709304-40b5a3560c60?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzAyfHxtdXNpYyUyMGFyYWJ8ZW58MHwwfDB8fHww",
  },
  {
    url: "https://images.unsplash.com/photo-1502710655568-ee441b74b0b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjg2fHxtdXNpYyUyMGFyYWJ8ZW58MHwwfDB8fHww",
  },
  {
    url: "https://images.unsplash.com/photo-1506271955088-88204c99e99a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTcyfHxtdXNpYyUyMGFyYWJ8ZW58MHwwfDB8fHww",
  },
  {
    url: "https://images.unsplash.com/photo-1514190226263-0a4456a291f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzcyfHxtdXNpYyUyMGFyYWJ8ZW58MHwwfDB8fHww",
  },
];

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {slideImages.map((slideImage, index) => (
          <div key={index}>
            <div
              style={{ ...divStyle, backgroundImage: `url(${slideImage.url})` }}
            >
              <div style={music}>
                <p style={musicWord}>مزيكا</p>
                <p style={musicWord}>מוסיקה</p>
                <p style={musicWord}>نغم</p>
                <p style={musicWord}>Music</p>
                <p style={musicWord}>מזיקא</p>
                <p style={musicWord}>Mmino</p>
                <p style={musicWord}>عود</p>
                <p style={musicWord}>דרבוקה</p>
                <p style={musicWord}>كمان</p>
                <p style={musicWord}>לחן</p>
                <p style={musicWord}>موسيقى</p>
                <p style={musicWord}>音乐</p>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};
export default Slideshow;
