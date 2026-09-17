import "./Collection.css";

const collections = [
  {
    number: "01",
    category: "PERFORMANCE",
    title: "AMG",
    description: "Born to perform.",

    // ADD YOUR IMAGE URL HERE
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1800&q=90",

    model: "Mercedes-AMG GT 63 S",
    type: "4-Door Coupé",
    power: "630 HP",
    acceleration: "3.2 SEC",
    drive: "4MATIC+",
  },

  {
    number: "02",
    category: "LUXURY",
    title: "MAYBACH",
    description: "Luxury without limits.",

    // ADD YOUR IMAGE URL HERE
    image: "https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1800&q=90",

    model: "Mercedes-Maybach S-Class",
    type: "Luxury Sedan",
    power: "496 HP",
    acceleration: "4.8 SEC",
    drive: "4MATIC",
  },

  {
    number: "03",
    category: "ELECTRIC",
    title: "ELECTRIC",
    description: "The future moves now.",

    // ADD YOUR IMAGE URL HERE
    image: "https://images.unsplash.com/photo-1648413653877-ade5eefd2f1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG1lcmNlZGVzfGVufDB8fDB8fHww",

    model: "Mercedes-Benz EQS",
    type: "Electric Luxury Sedan",
    power: "536 HP",
    acceleration: "4.1 SEC",
    drive: "4MATIC",
  },
];

function Collection() {
  return (
    <section className="collection-section">

      {/* Soft cinematic transition from Hero */}
      <div className="collection-top-fade"></div>

      <div className="collection-inner">

        {/* =========================
            HEADING
        ========================= */}

        <div className="collection-heading">

          <div className="collection-eyebrow">
            <span></span>
            THE COLLECTION
          </div>

          <h2>
            THREE WORLDS.
            <br />
            <em>ONE ICON.</em>
          </h2>

          <p>
            Three expressions of Mercedes-Benz —
            performance, luxury and electric innovation.
          </p>

        </div>


        {/* =========================
            CARDS
        ========================= */}

        <div className="collection-grid">

          {collections.map((car) => (
            <article
              className="collection-card"
              key={car.number}
            >

              {/* IMAGE */}

              <img
                src={car.image}
                alt={car.model}
                className="collection-image"
              />


              {/* DARK IMAGE GRADIENT */}

              <div className="collection-card-overlay"></div>


              {/* NUMBER */}

              <div className="collection-number">
                {car.number}
              </div>


              {/* NORMAL CARD CONTENT */}

              <div className="collection-content">

                <div>
                  <span className="collection-category">
                    {car.category}
                  </span>

                  <h3>{car.title}</h3>

                  <p>{car.description}</p>
                </div>

                <div className="collection-explore">
                  <span>EXPLORE</span>

                  <span className="collection-arrow">
                    ↗
                  </span>
                </div>

              </div>


              {/* =========================
                  HOVER INFORMATION
              ========================= */}

              <div className="car-info">

                <div className="car-info-top">

                  <span className="car-info-label">
                    {car.category}
                  </span>

                  <span className="car-info-number">
                    {car.number}
                  </span>

                </div>


                <div className="car-info-main">

                  <span className="car-info-type">
                    {car.type}
                  </span>

                  <h4>
                    {car.model}
                  </h4>

                </div>


                <div className="car-specs">

                  <div>
                    <span>POWER</span>
                    <strong>{car.power}</strong>
                  </div>

                  <div>
                    <span>0–100 KM/H</span>
                    <strong>{car.acceleration}</strong>
                  </div>

                  <div>
                    <span>DRIVE</span>
                    <strong>{car.drive}</strong>
                  </div>

                </div>


                <button className="car-info-button">
                  DISCOVER
                  <span>↗</span>
                </button>

              </div>

            </article>
          ))}

        </div>


        <div className="collection-bottom-space"></div>

      </div>

    </section>
  );
}

export default Collection;