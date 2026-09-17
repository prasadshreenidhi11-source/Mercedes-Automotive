import "./DrivingExperience.css";

const drivingImage =
  "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=2200&q=90";

function DrivingExperience() {
  return (
    <section className="driving-section">

      {/* INTRO */}
      <div className="driving-intro">
        <div className="driving-eyebrow">
          <span></span>
          THE DRIVING EXPERIENCE
        </div>

        <h2>
          NOT JUST A DRIVE.
          <br />
          <em>A FEELING.</em>
        </h2>

        <p>
          Precision engineered for those who expect more from every road,
          every corner and every moment behind the wheel.
        </p>
      </div>

      {/* CINEMATIC IMAGE */}
      <div className="driving-image-wrap">
        <div
          className="driving-image"
          style={{
            backgroundImage: `url(${drivingImage})`,
          }}
        ></div>

        <div className="driving-image-overlay"></div>

        <div className="driving-image-content">
          <span>THE ROAD IS YOURS</span>

          <div className="driving-circle">
            <span>DISCOVER</span>
            <strong>↗</strong>
          </div>
        </div>
      </div>

      {/* EXPERIENCE POINTS */}
      <div className="driving-points">

        <article className="driving-point">
          <span className="point-number">01</span>

          <div>
            <span className="point-label">PERFORMANCE</span>

            <h3>
              Power that responds
              <br />
              before you think.
            </h3>

            <p>
              Every movement is immediate. Every acceleration feels
              deliberate. Performance becomes instinct.
            </p>
          </div>
        </article>

        <article className="driving-point">
          <span className="point-number">02</span>

          <div>
            <span className="point-label">CONTROL</span>

            <h3>
              Confidence in
              <br />
              every curve.
            </h3>

            <p>
              Intelligent engineering keeps the vehicle composed,
              connected and ready for whatever comes next.
            </p>
          </div>
        </article>

        <article className="driving-point">
          <span className="point-number">03</span>

          <div>
            <span className="point-label">COMFORT</span>

            <h3>
              Silence
              <br />
              at speed.
            </h3>

            <p>
              Refined interiors, controlled motion and effortless
              technology turn every journey into a private experience.
            </p>
          </div>
        </article>

      </div>

      {/* FINAL STATEMENT */}
      <div className="driving-statement">
        <span>ENGINEERED FOR THE MOMENT</span>

        <h2>
          EVERY SECOND
          <br />
          <em>MATTERS.</em>
        </h2>
      </div>

    </section>
  );
}

export default DrivingExperience;