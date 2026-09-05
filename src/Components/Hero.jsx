import {Link} from "react-router-dom";
import Footer from "../Components/Footer";

export default function Hero(){
    return(
    <main className="about-page">

      

      <section className="about-section">
        <div className="section-content">
          <p className="section-label">OUR STORY</p>

          <h2>Making property discovery easier.</h2>

          <p>
            NaijaHomes was created from a simple idea: finding the
            right property in Nigeria shouldn't be complicated.
          </p>

          <p>
            Searching for a home can often mean going through
            countless listings, comparing different locations, and
            trying to find reliable information about properties.
            We wanted to create a simpler way for people to explore
            their options.
          </p>

          <p>
            NaijaHomes brings property discovery into one convenient
            digital experience, allowing users to explore homes,
            apartments, land, and other properties from different
            locations across Nigeria.
          </p>

          <p>
            Our goal is simple — to make discovering your next
            property easier, clearer, and more convenient.
          </p>
        </div>
      </section>

      <section className="about-section light-green-section">
        <div className="section-content">
          <p className="section-label">WHO WE ARE</p>

          <h2>More than just property listings.</h2>

          <p>
            NaijaHomes is a property discovery platform built around
            the needs of people searching for their next home or
            property.
          </p>

          <p>
            We believe that choosing where you live or invest is an
            important decision. That's why we aim to present property
            information in a simple and organized way, helping users
            understand their options before making a decision.
          </p>

          <p>
            From finding an apartment in Lagos to discovering a home
            in Abuja or exploring property opportunities in Ibadan
            and Port Harcourt, NaijaHomes is designed to make the
            search easier.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="section-content">
          <p className="section-label">WHY CHOOSE NAIJAHOMES</p>

          <h2>Why search with us?</h2>

          <p>
            We focus on making the property discovery process
            straightforward and convenient.
          </p>

          <ul className="why-choose-list">
            <li>
              <strong>Wide Property Selection</strong>
              <p>
                Explore apartments, houses, duplexes, land, and
                other properties across different locations in
                Nigeria.
              </p>
            </li>

            <li>
              <strong>Simple Property Search</strong>
              <p>
                Search and filter properties based on location,
                price, property type, bedrooms, bathrooms, and
                other important details.
              </p>
            </li>

            <li>
              <strong>Explore Different Locations</strong>
              <p>
                Discover properties across cities and neighborhoods
                such as Lagos, Abuja, Ibadan, and Port Harcourt.
              </p>
            </li>

            <li>
              <strong>Detailed Property Information</strong>
              <p>
                Get a clearer view of each property through its
                price, specifications, amenities, images, location,
                description, and agent information.
              </p>
            </li>
          </ul>
        </div>
      </section>


      <section className="about-section">
        <div className="section-content">
          <p className="section-label">WHAT WE OFFER</p>

          <h2>Property opportunities made easier to explore.</h2>

          <p>
            At NaijaHomes, we provide a simple way to discover
            different types of property opportunities across
            Nigeria.
          </p>

          <ul className="offer-list">
            <li>
              <strong>Properties for Sale</strong> — Discover
              apartments, houses, duplexes, land, and other
              properties available for purchase.
            </li>

            <li>
              <strong>Properties for Rent</strong> — Find rental
              homes and apartments that match your preferred
              location and budget.
            </li>

            <li>
              <strong>Property Discovery</strong> — Explore
              properties across different Nigerian cities and
              neighborhoods.
            </li>

            <li>
              <strong>Detailed Property Information</strong> —
              View prices, specifications, amenities, images,
              locations, descriptions, and agent information.
            </li>
          </ul>
        </div>
      </section>

      <section className="about-stats">
        <div className="stat-item">
          <h3> 20+</h3>
          <p>Properties</p>
        </div>

        <div className="stat-item">
          <h3>4+</h3>
          <p>Nigerian Cities</p>
        </div>
      </section>


      
      <section className="about-cta">
        <div className="cta-content">
          <p className="section-label">START YOUR SEARCH</p>

          <h2>Your next home could be closer than you think.</h2>

          <p>
            Explore our collection of properties and find a place
            that feels right for you.
          </p>

         <Link to= "/properties"><button className="primary-btn">Explore Properties →</button></Link>
        </div>
      </section>
  <Footer/>
    </main>
       
  );
}
