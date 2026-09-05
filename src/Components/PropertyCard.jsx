import { Link } from "react-router-dom"
export default function PropertyCard({property}){
    return(
     <div className="property-card">
        <img src={`/images/${property.image}`} alt={`property${property.id}`} />
        <div className="card-content">
          <h3>{property.title}</h3>
          <p>{property.location}</p>
          <p>₦{property.price.toLocaleString()}  <span><Link to={`/property/${property.id}`}>view details</Link></span></p>
        </div>
     </div>
    )
}