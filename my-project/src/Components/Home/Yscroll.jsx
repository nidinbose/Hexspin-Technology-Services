import React from "react";
import "./Css/Yscroll.css"; 


const Yscroll = () => {
  const titles = [
    "CSS Scroll Animations",
    "Animate on scroll",
    "Parallax Effects",
    "Drive Keyframes",
    "Extra Slides",
    "Resize Window",
    "Browser support",
    "Your idea",
    "Fork",
    "Heart",
  ];

  const descriptions = [
    "Check out this rad demo",
    "Works with media queries too",
    "Tweak your timings",
    "CSS alone and...",
    "More content because...",
    "Try resizing the window",
    "You'll need to be in Chrome Canary",
    "What would you make?",
    "Fork this and make it your own!",
    "If you like this, heart it (3x)",
  ];

  const links = [
    "Preorder",
    "Check it out",
    "Get Styling",
    "No JavaScript",
    "CSS to the moon",
    "Resize",
    "Do it",
    "Code",
    "Duplicate",
    "Like",
  ];

  return (
    <>
      <nav>jbrand</nav>
      <main>
        {titles.map((title, index) => (
          <article key={index} style={{ "--index": index }}>
            <div className="article__img">
              <img
                src={`https://picsum.photos/1920/1080?random=${index + 1}`}
                alt={`Slide ${index + 1}`}
              />
            </div>
            <div className="article__info">
              <h2>{title}</h2>
              <p>{descriptions[index]}</p>
              <a href="#">{links[index]}</a>
            </div>
          </article>
        ))}
      </main>
    </>
  );
};

export default Yscroll;
