import { useEffect, useRef, useState } from "react";
import "./AMG.css";

const amgImage =
  "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2400&q=90";

function AMG() {
  const sectionRef = useRef(null);

  const [mouse, setMouse] = useState({
    x: 50,
    y: 50,
    active: false,
  });

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const move = (event) => {
      const rect = section.getBoundingClientRect();

      const x =
        ((event.clientX - rect.left) / rect.width) * 100;

      const y =
        ((event.clientY - rect.top) / rect.height) * 100;

      setMouse({
        x,
        y,
        active: true,
      });
    };

    const leave = () => {
      setMouse((prev) => ({
        ...prev,
        active: false,
      }));
    };

    section.addEventListener("mousemove", move);
    section.addEventListener("mouseleave", leave);

    return () => {
      section.removeEventListener("mousemove", move);
      section.removeEventListener("mouseleave", leave);
    };
  }, []);

  return (
    <section
      className="amg-section"
      ref={sectionRef}
      style={{
        "--amg-x": `${mouse.x}%`,
        "--amg-y": `${mouse.y}%`,
      }}
    >

      {/* ATMOSPHERIC RED LIGHT */}
      <div className="amg-light"></div>


      {/* HUGE BACKGROUND TYPOGRAPHY */}
      <div className="amg-giant-text">
        AMG
      </div>


      {/* TOP NAVIGATION LABEL */}
      <div className="amg-top">

        <span>06 — PERFORMANCE</span>

        <span>AMG / AFFALTERBACH</span>

      </div>


      {/* MAIN CAR VISUAL */}
      <div className="amg-visual">

        <div
          className="amg-car"
          style={{
            backgroundImage: `url(${amgImage})`,
          }}
        ></div>

        <div className="amg-car-shade"></div>

      </div>


      {/* MAIN TITLE */}
      <div className="amg-title">

        <span>HANDCRAFTED PERFORMANCE</span>

        <h2>
          BORN
          <br />
          <em>TO PERFORM.</em>
        </h2>

      </div>


      {/* PERFORMANCE MARK */}
      <div className="amg-mark">
        <span>ONE MAN</span>
        <strong>ONE ENGINE</strong>
      </div>


      {/* CURSOR */}
      <div
        className={`amg-cursor ${
          mouse.active ? "amg-cursor-active" : ""
        }`}
      >
        <span>AMG</span>
        <strong>↗</strong>
      </div>


      {/* PERFORMANCE DATA */}
      <div className="amg-performance">

        <div className="amg-performance-item">
          <span>PERFORMANCE</span>
          <strong>AMG</strong>
        </div>

        <div className="amg-performance-item">
          <span>ENGINEERING</span>
          <strong>V8</strong>
        </div>

        <div className="amg-performance-item">
          <span>DRIVING</span>
          <strong>4MATIC+</strong>
        </div>

        <div className="amg-performance-item">
          <span>PHILOSOPHY</span>
          <strong>HANDCRAFTED</strong>
        </div>

      </div>


      {/* BOTTOM STATEMENT */}
      <div className="amg-bottom">

        <div className="amg-bottom-line"></div>

        <p>
          Performance is not simply measured.
          <br />
          It is experienced.
        </p>

        <span>AMG</span>

      </div>

    </section>
  );
}

export default AMG;