import NavBar from "../Components/Navbar";
import Footer from "../Components/Footer";
import SearchBar from "../Components/SearchBar";
import FilterPanel from "../Components/FilterPanel";
import PropertyCard from "../Components/PropertyCard";
import { useState } from "react";

export default function Properties({ properties }) {
  const [SearchTerm, SetSearchTerm] = useState("");
  const [propertyType, setpropertyType] = useState("all");
  const [location, setLocation] = useState("all");
  const [PriceRange, setpriceRange] = useState("all");
  const [sortBy, setsortBy] = useState("newest");
  const filteredProperties = properties
    .filter((property) => {
      const matchesSearch = property.title
        .toLowerCase()
        .includes(SearchTerm.toLowerCase().trim());

      const matchesType =
        propertyType === "all" || property.type === propertyType;

      const propertyState = property.location.split(",")[1].trim();
      const matchesLocation = location === "all" || propertyState === location;

      let matchesPrice = true;

      if (PriceRange === "low") {
        matchesPrice = property.price < 50000000;
      } else if (PriceRange === "medium") {
        matchesPrice =
          property.price >= 50000000 && property.price <= 100000000;
      } else if (PriceRange === "high") {
        matchesPrice = property.price > 100000000;
      }

      return matchesSearch && matchesType && matchesLocation && matchesPrice;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") {
        return a.price - b.price;
      }

      if (sortBy === "price-high") {
        return b.price - a.price;
      }

      return b.id - a.id;
    });
  return (
    <div className="properties-section">
      <NavBar />
      <div className="properties-header">
        <h2> Explore our available Properties</h2> <br />
        <p>
          <i>
            Browse through our selection of quality properties and find a place
            that feels like home.
          </i>
        </p>
      </div>
      <div className="SearchAndFilter">
        <SearchBar SearchTerm={SearchTerm} SetSearchTerm={SetSearchTerm} />
        <FilterPanel
          propertyType={propertyType}
          setpropertyType={setpropertyType}
          location={location}
          setLocation={setLocation}
          PriceRange={PriceRange}
          setpriceRange={setpriceRange}
          sortBy={sortBy}
          setsortBy={setsortBy}
        />
      </div>
      <div className="property-space">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p className="no-properties">
            No matching properties (for now 😏)....
          </p>
        )}
      </div>

      <Footer />
    </div>
  );
}
