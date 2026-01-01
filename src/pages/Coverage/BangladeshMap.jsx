import React, { useState } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

// Center of Bangladesh
const position = [23.685, 90.3563];

// Marker Icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

// Fly animation helper
function FlyToDistrict({ coords }) {
  const map = useMap();
  if (coords) {
    map.flyTo(coords, 13, { duration: 1.6 });
  }
  return null;
}

const BangladeshMap = ({ serviceCenters }) => {
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [activeCoords, setActiveCoords] = useState(null);

  // Handle typing
  const handleChange = (value) => {
    setSearchText(value);

    if (!value.trim()) {
      setSuggestions([]);
      return;
    }

    const matches = serviceCenters.filter((d) =>
      d.district.toLowerCase().includes(value.toLowerCase())
    );

    setSuggestions(matches.slice(0, 6));
  };

  // Handle suggestion click
  const handleSelect = (district) => {
    setSearchText(district.district);
    setActiveCoords([district.latitude, district.longitude]);
    setSuggestions([]);
  };

  return (
    <div className="relative h-[800px] w-full rounded-2xl overflow-hidden shadow-xl">

      {/* 🔍 SEARCH OVERLAY */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-[1100] w-full max-w-lg px-4">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">

          {/* Input */}
          <div className="flex items-center gap-3 px-5 py-4">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m1.85-5.4a7.25 7.25 0 11-14.5 0 7.25 7.25 0 0114.5 0z"
              />
            </svg>

            <input
              type="text"
              placeholder="Search district or service area"
              className="flex-1 outline-none text-sm placeholder-gray-400"
              value={searchText}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>

          {/* Suggestions */}
          {suggestions.length > 0 && (
            <ul className="max-h-64 overflow-y-auto border-t">
              {suggestions.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleSelect(item)}
                  className="px-5 py-3 cursor-pointer hover:bg-primary/10 transition"
                >
                  <p className="font-medium text-[#03373D] text-sm">
                    {item.district}
                  </p>
                  <p className="text-xs text-gray-500">
                    Covers: {item.covered_area.slice(0, 4).join(", ")}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className="text-center text-xs text-white mt-2 drop-shadow">
          Start typing to locate nearby service centers
        </p>
      </div>

      {/* 🗺️ MAP */}
      <MapContainer
        center={position}
        zoom={8}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <FlyToDistrict coords={activeCoords} />

        {serviceCenters.map((center, index) => (
          <Marker
            key={index}
            position={[center.latitude, center.longitude]}
            icon={customIcon}
          >
            <Popup>
              <div className="text-sm">
                <h3 className="font-semibold text-primary">
                  {center.district}
                </h3>
                <p className="text-gray-600 mt-1">
                  {center.covered_area.join(", ")}
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BangladeshMap;
