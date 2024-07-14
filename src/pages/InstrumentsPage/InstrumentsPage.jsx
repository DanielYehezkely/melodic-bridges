import React from "react";
import "./InstrumentsPage.css";
import InstrumentsCard from "../../components/InstrumentsCard";
import Slideshow from "../../components/Slideshow";



const InstrumentsPage = () => {
  const collection = [
    {
      imgURL:
        "https://images.unsplash.com/photo-1683632420809-72c1738aade3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fG11c2ljYWwlMjBpbnN0cnVtZW50fGVufDB8fDB8fHww",
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1683632420809-72c1738aade3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fG11c2ljYWwlMjBpbnN0cnVtZW50fGVufDB8fDB8fHww",
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1683632420809-72c1738aade3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fG11c2ljYWwlMjBpbnN0cnVtZW50fGVufDB8fDB8fHww",
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1683632420809-72c1738aade3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fG11c2ljYWwlMjBpbnN0cnVtZW50fGVufDB8fDB8fHww",
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1683632420809-72c1738aade3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fG11c2ljYWwlMjBpbnN0cnVtZW50fGVufDB8fDB8fHww",
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1683632420809-72c1738aade3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fG11c2ljYWwlMjBpbnN0cnVtZW50fGVufDB8fDB8fHww",
    },
    {
      imgURL:
        "https://images.unsplash.com/photo-1683632420809-72c1738aade3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODJ8fG11c2ljYWwlMjBpbnN0cnVtZW50fGVufDB8fDB8fHww",
    },
  ];
  return (
    <>
      <div className="slide">
        <Slideshow/>
    </div>
      <div className="cards-container">
        <div>
          {" "}
          {collection.map((item) => (
            <div className="cardsDiv">
              <InstrumentsCard image={item.imgURL} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default InstrumentsPage;
