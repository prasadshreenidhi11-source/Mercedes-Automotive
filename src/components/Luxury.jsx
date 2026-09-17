import { useEffect, useRef, useState } from "react";
import benzScene2 from "../assets/benz-scene-2.jpg";
import "./Luxury.css";

const interiorImage =
  "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=2200&q=90";

function Luxury() {
  const visualRef = useRef(null);

  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
    active: false,
  });

  useEffect(() => {
    const visual = visualRef.current;

    if (!visual) return;

    const handleMouseMove = (event) => {
      const rect = visual.getBoundingClientRect();

      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;

      setMouse({
        x,
        y,
        active: true,
      });
    };

    const handleMouseLeave = () => {
      setMouse((prev) => ({
        ...prev,
        active: false,
      }));
    };

    visual.addEventListener("mousemove", handleMouseMove);
    visual.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      visual.removeEventListener("mousemove", handleMouseMove);
      visual.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="luxury-section">

      {/* INTRO */}
      <div className="luxury-intro">

        <div className="luxury-eyebrow">
          <span></span>
          THE ART OF LUXURY
        </div>

        <h2>
          WHERE EVERY
          <br />
          <em>DETAIL</em> MATTERS.
        </h2>

        <p>
          Step inside a space where craftsmanship, technology and
          comfort become one seamless experience.
        </p>

      </div>


      {/* MAIN VISUAL */}
      <div
  className="luxury-visual"
  ref={visualRef}
  style={{
    "--mouse-x": `${mouse.x}%`,
    "--mouse-y": `${mouse.y}%`,
  }}
>
  {/* CAR IS ALWAYS VISIBLE */}
  <div
    className="luxury-car-base"
    style={{
      backgroundImage: `url(${benzScene2})`,
    }}
  ></div>

  {/* INTERIOR ONLY APPEARS UNDER CURSOR */}
  <div
    className={`luxury-interior-reveal ${
      mouse.active ? "is-active" : ""
    }`}
    style={{
      backgroundImage: `url(${interiorImage})`,
    }}
  ></div>

  <div className="luxury-overlay"></div>

  {/* YOUR EXISTING TEXT */}
  <div className="luxury-main-text">
    <span>THE INTERIOR</span>

    <h3>
      BUILT
      <br />
      <em>AROUND YOU.</em>
    </h3>
  </div>

 


        {/* DETAIL 01 */}
        <div className="luxury-detail luxury-detail-one">

          <div className="detail-line"></div>

          <div>
            <span>01</span>
            <strong>CRAFTSMANSHIP</strong>
            <p>Every surface is considered.</p>
          </div>

        </div>


        {/* DETAIL 02 */}
        <div className="luxury-detail luxury-detail-two">

          <div className="detail-line"></div>

          <div>
            <span>02</span>
            <strong>COMFORT</strong>
            <p>Designed around every journey.</p>
          </div>

        </div>


        {/* DETAIL 03 */}
        <div className="luxury-detail luxury-detail-three">

          <div className="detail-line"></div>

          <div>
            <span>03</span>
            <strong>TECHNOLOGY</strong>
            <p>Intelligence at your fingertips.</p>
          </div>

        </div>


        {/* CURSOR LABEL */}
        <div
          className={`luxury-cursor ${
            mouse.active ? "is-active" : ""
          }`}
        >
          <span>REVEAL</span>
          <strong>✦</strong>
        </div>


        {/* CORNER LABEL */}
        <div className="luxury-corner-label">
          <span>INTERIOR</span>
          <strong>01 — 03</strong>
        </div>

      </div>


      {/* BOTTOM STATEMENT */}
      <div className="luxury-bottom">

        <div className="luxury-bottom-number">
          04
        </div>

        <div className="luxury-bottom-content">

          <span>CRAFTED FOR THE SENSES</span>

          <h3>
            LUXURY IS NOT
            <br />
            <em>WHAT YOU SEE.</em>
          </h3>

          <p>
            It is what you feel in every movement, every touch
            and every moment behind the wheel.
          </p>

        </div>

      </div>

    </section>
  );
}

export default Luxury;