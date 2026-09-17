import benzScene2 from "../assets/benz-scene-2.jpg";
import { useEffect, useRef, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const heroRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const rect = heroRef.current.getBoundingClientRect();
      const total = heroRef.current.offsetHeight - window.innerHeight;

      const value = Math.min(
        1,
        Math.max(0, -rect.top / total)
      );

      setProgress(value);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  /*
    Scene 1
    0 → 0.45
  */
  const sceneOneProgress = Math.min(
    1,
    progress / 0.45
  );

  /*
    Scene 2
    0.35 → 1
  */
  const sceneTwoProgress = Math.min(
    1,
    Math.max(
      0,
      (progress - 0.32) / 0.68
    )
  );

  return (
    <main
      className="benz-page"
      ref={heroRef}
    >
      <div className="benz-sticky">

        {/* ================= HEADER ================= */}

        <header className="benz-header">

          <div className="benz-logo">
            <span className="benz-star">✦</span>
            <span>MERCEDES-BENZ</span>
          </div>

          <nav className="benz-nav">
            <a href="#collection">Collection</a>
            <a href="#amg">AMG</a>
            <a href="#maybach">Maybach</a>
            <a href="#electric">Electric</a>
          </nav>

          <button className="benz-menu">
            <span></span>
            <span></span>
          </button>

        </header>


        {/* ================= SCENE 1 ================= */}

        <section
          className="benz-scene scene-one"
          style={{
            opacity:
              1 - sceneOneProgress * 1.2,

            transform: `
              scale(${1 + sceneOneProgress * 0.08})
              translateY(${sceneOneProgress * -5}%)
            `,
          }}
        >

          <div className="scene-one-image"></div>

          <div className="scene-one-vignette"></div>

          <div className="scene-one-content">

            <p className="eyebrow">
              MERCEDES-BENZ
            </p>

            <h1>
              THE
              <br />
              <span>ICON</span>
            </h1>

            <p className="scene-description">
              Where engineering becomes emotion.
            </p>

            <button className="discover-button">
              DISCOVER
              
            </button>

          </div>

          <div className="scene-one-number">
            <span>01</span>
            <span>/</span>
            <span>03</span>
          </div>

        </section>


        {/* ================= SCENE 2 ================= */}

        {/* ================= SCENE 2 ================= */}

{/* ================= SCENE 2 ================= */}

<section
  className="benz-scene scene-two"
  style={{
    opacity: sceneTwoProgress,
    transform: `scale(${1.08 - sceneTwoProgress * 0.08})`,
  }}
>
  {/* FULL CINEMATIC IMAGE */}
 <div
  className="ghat-road-background"
  style={{
    backgroundImage: `url(${benzScene2})`,
  }}
></div>

  {/* DARK CINEMATIC GRADING */}
  <div className="scene-two-gradient" />

  {/* SOFT VIGNETTE */}
  <div className="scene-two-vignette" />

  {/* CONTENT */}
  <div className="scene-two-content">
    <p className="scene-two-eyebrow">
      MERCEDES-BENZ
    </p>

    <h2>
      THE ROAD
      <br />
      HAS NO
      <br />
      <span>LIMITS.</span>
    </h2>

    <p className="scene-two-description">
      Designed for the road ahead.
      <br />
      Engineered for everything beyond it.
    </p>
  </div>

  {/* SPECIFICATION */}
  <div className="scene-two-meta">

    <div>
      <span>MODEL</span>
      <strong>AMG GT</strong>
    </div>

    <div>
      <span>DRIVE</span>
      <strong>4MATIC+</strong>
    </div>

    <div>
      <span>EXPERIENCE</span>
      <strong>PERFORMANCE</strong>
    </div>

  </div>

  {/* SCENE NUMBER */}
  <div className="scene-two-number">
    <span>02</span>
    <span>/</span>
    <span>03</span>
  </div>

</section>


        {/* ================= SCROLL INDICATOR ================= */}

        <div className="benz-scroll">

          <span>SCROLL TO EXPLORE</span>

          <div className="scroll-line">
            <div
              style={{
                height: `${progress * 100}%`,
              }}
            />
          </div>

        </div>

      </div>
    </main>
  );
}