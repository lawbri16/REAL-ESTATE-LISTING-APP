import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useParams } from "react-router-dom";

export default function PropertyDetails({ properties }) {
  const { id } = useParams();

  const property = properties.find(
    (property) => property.id === Number(id)
  );

  if (!property) {
    return <h2>Property not found</h2>;
  }

  return (
    <div className="property-details-page">
      <NavBar />

      <main className="property-details-container">

        <div className="property-details-image-wrapper">
          <img
            src={`/images/${property.image}`}
            alt={property.title}
            className="property-details-image"
          />
        </div>

        <div className="property-details-content">

          <div className="property-details-heading">
            <div>
              <p className="property-details-location">
                {property.location}
              </p>

              <h1>{property.title}</h1>
            </div>

            <div className="property-details-price">
              <h2>₦{property.price.toLocaleString()}</h2>
        
            </div>
          </div>

          <div className="property-info">
            <div>
              <span>Bedrooms</span>
              <strong>{property.bedrooms}</strong>
            </div>

            <div>
              <span>Bathrooms</span>
              <strong>{property.bathrooms}</strong>
            </div>

            <div>
              <span>Area</span>
              <strong>{property.area} m²</strong>
            </div>
          </div>

          <section className="property-details-section">
            <h2>Description</h2>
            <p>{property.description}</p>
          </section>

          <section className="property-details-section">
            <h2>Amenities</h2>

            <div className="amenities-list">
              {property.amenities.map((amenity, index) => (
                <span key={index}>{amenity}</span>
              ))}
            </div>
          </section>

          <section className="property-details-section">
            <h2>Property Information</h2>

            <div className="property-information">
              <div>
                <span>Property Type</span>
                <strong>{property.type}</strong>
              </div>

              <div>
                <span>Purpose</span>
                <strong>{property.purpose}</strong>
              </div>

              <div>
                <span>Location</span>
                <strong>{property.location}</strong>
              </div>

            </div>
          </section>

          <section className="agent-section">
            <div>
              <p>Interested in this property?</p>
              <h2>Contact our property agent</h2>
            </div>

            <button>Contact Agent</button>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}