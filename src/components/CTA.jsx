import { useState } from "react";
import "./CTA.css";

function CTA() {
  const [focused, setFocused] = useState("");

  return (
    <section className="cta-section">
      <div className="cta-glow"></div>

      <div className="cta-container">

        {/* LEFT */}
        <div className="cta-copy">
          <span className="cta-eyebrow">YOUR JOURNEY</span>

          <h2>
            YOUR NEXT
            <br />
            <span>JOURNEY</span>
            <br />
            STARTS HERE.
          </h2>

          <p>
            Experience Mercedes-Benz beyond the ordinary.
            Tell us what you're looking for and begin your
            private journey with us.
          </p>

          <div className="cta-meta">
            <span>PRIVATE EXPERIENCE</span>
            <span>01 — 01</span>
          </div>
        </div>

        {/* RIGHT FORM */}
        <form className="cta-form">

          <div className={`cta-field ${focused === "name" ? "active" : ""}`}>
            <label>01 / NAME</label>
            <input
              type="text"
              placeholder="Your name"
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused("")}
            />
          </div>

          <div className={`cta-field ${focused === "email" ? "active" : ""}`}>
            <label>02 / EMAIL</label>
            <input
              type="email"
              placeholder="Your email"
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused("")}
            />
          </div>

          <div className={`cta-field ${focused === "phone" ? "active" : ""}`}>
            <label>03 / PHONE</label>
            <input
              type="tel"
              placeholder="Your phone number"
              onFocus={() => setFocused("phone")}
              onBlur={() => setFocused("")}
            />
          </div>

          <div className={`cta-field ${focused === "model" ? "active" : ""}`}>
            <label>04 / MODEL</label>

            <select
              onFocus={() => setFocused("model")}
              onBlur={() => setFocused("")}
              defaultValue=""
            >
              <option value="" disabled>
                Select your Mercedes
              </option>
              <option>Mercedes-AMG</option>
              <option>Mercedes-Maybach</option>
              <option>Mercedes-Benz S-Class</option>
              <option>Mercedes-Benz G-Class</option>
              <option>Mercedes-Benz EQS</option>
              <option>Other</option>
            </select>
          </div>

          <div className={`cta-field cta-message ${focused === "message" ? "active" : ""}`}>
            <label>05 / MESSAGE</label>

            <textarea
              placeholder="Tell us about your journey..."
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused("")}
            ></textarea>
          </div>

          <button type="submit" className="cta-submit">
            <span>REQUEST A PRIVATE EXPERIENCE</span>
            <span className="cta-arrow">↗</span>
          </button>

        </form>
      </div>
    </section>
  );
}

export default CTA;