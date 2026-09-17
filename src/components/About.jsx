import { useEffect, useState } from "react";
import "./About.css";

const cars = [
  {
    image:
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=90",
    title: "THE ICON",
    text: "A legacy shaped by innovation, elegance and an uncompromising approach to automotive design.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=90",
    title: "THE CRAFT",
    text: "Every Mercedes-Benz is created around the belief that engineering and emotion should exist together.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=90",
    title: "THE FUTURE",
    text: "From performance to electric mobility, Mercedes-Benz continues to shape what driving can become.",
  },
];

function About() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((current) => (current + 1) % cars.length);
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="about-section">

      {/* LEFT HEADING */}
      <div className="about-heading">

        <span className="about-eyebrow">
          05 — ABOUT
        </span>

        <h2>
          ABOUT
          <br />
          <em>THE ICON.</em>
        </h2>

      </div>


      {/* MAIN CONTENT */}
      <div className="about-layout">

        {/* COVERFLOW */}
        <div className="about-coverflow">

          {cars.map((car, index) => {

            const position =
              (index - active + cars.length) % cars.length;

            let className = "about-card";

            if (position === 0) {
              className += " about-card-active";
            } else if (position === 1) {
              className += " about-card-right";
            } else {
              className += " about-card-left";
            }

            return (
              <div
                key={car.title}
                className={className}
                onClick={() => setActive(index)}
              >
                <img
                  src={car.image}
                  alt={car.title}
                />

                <div className="about-card-overlay">
                  <span>0{index + 1}</span>
                </div>
              </div>
            );
          })}

        </div>


        {/* RIGHT CONTENT */}
        <div className="about-content">

          <span className="about-content-label">
            MERCEDES-BENZ
          </span>

          <h3>
            MORE THAN
            <br />
            <em>A MACHINE.</em>
          </h3>

          <p>
            Mercedes-Benz represents a meeting point between
            engineering, luxury and human emotion. Every vehicle
            is designed not simply to move you, but to create an
            experience that stays with you.
          </p>

          <p>
            From iconic performance machines to intelligent
            electric mobility, the philosophy remains the same:
            create something that feels unmistakably different.
          </p>


          <div className="about-active-info">

            <span>
              {cars[active].title}
            </span>

            <div></div>

            <p>
              {cars[active].text}
            </p>

          </div>


          <button className="about-button">
            DISCOVER THE STORY
            <span>↗</span>
          </button>

        </div>

      </div>


      {/* BOTTOM NUMBER */}
      <div className="about-bottom-number">
        05 / 08
      </div>

    </section>
  );
}

export default About;