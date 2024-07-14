import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const divStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundSize: "cover",
  height: "150px",
  marginTop:"20px",
  opacity:"0.5"
  
};

const music = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space around",
  fontSize:"20px"
 
};
const slideImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    
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
              <div style={music} >
                <p className="music1">مزيكا</p>
                <p className="music2">מוסיקה</p>
                <p className="music3">موسيقى</p>
                <p className="music4">Music</p>
                <p className="music5">מזיקא</p>
                <p className="music6">Musica</p>
              </div>
            </div>
          </div>
        ))}
      </Fade>
    </div>
  );
};
export default Slideshow;