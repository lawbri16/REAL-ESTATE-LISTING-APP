import { useState } from "react";

export default function FilterPanel({
  propertyType,
  setpropertyType,
  location,
  setLocation,
  PriceRange,
  setpriceRange,
  sortBy,
  setsortBy,
}) {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="filter-panel">
      <button onClick={() => setisOpen(!isOpen)}>Filters </button>

      {isOpen && (
        <div className="filter-options">
          <div className="filter-group">
            <label> Property Type</label>
            <select
              value={propertyType}
              onChange={(e) => setpropertyType(e.target.value)}>
              <option value="all"> All types</option>
              <option value="apartment"> Apartment</option>
              <option value="duplex"> Duplex</option>
              <option value="house"> House</option>
              <option value="mansion"> Mansion</option>
            </select>
          </div>
          <div className="filter-group">
            <label> Location </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}>
              <option value="all"> All locations</option>
              <option value="Lagos">Lagos</option>
              <option value="Ibadan">Ibadan</option>
              <option value="Abuja">Abuja</option>
              <option value="Port-Harcourt">Port-Harcourt</option>
            </select>
          </div>
          <div className="filter-group">
            <br />
            <label>Price Range </label>
            <select
              value={PriceRange}
              onChange={(e) => setpriceRange(e.target.value)}
            >
              <option value="all"> Any price</option>
              <option value="low"> Below 50m </option>
              <option value="medium"> 50m-100M</option>
              <option value="high">Above 100M</option>
            </select>
          </div>
          <div className="filter-group">
            <br />
            <label>SortBy </label>
            <select value={sortBy} onChange={(e) => setsortBy(e.target.value)}>
              <option value="newest"> Newest</option>
              <option value="price-low"> Price: low to High </option>
              <option value="price-high"> Price:High to Low </option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
}
