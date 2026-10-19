"use client";

import { useState } from "react";

type PinStatus = "Needs pickup" | "In progress" | "Complete";
type SignPin = {
  id: number;
  name: string;
  address: string;
  status: PinStatus;
  time: string;
  left: string;
  top: string;
  color: "coral" | "blue" | "green";
};

const pins: SignPin[] = [
  {
    id: 1,
    name: "Riverside pickup",
    address: "214 Riverfront Pkwy",
    status: "Needs pickup",
    time: "Added 8:42 AM",
    left: "23%",
    top: "30%",
    color: "coral",
  },
  {
    id: 2,
    name: "Northside crew",
    address: "806 Cherokee Blvd",
    status: "In progress",
    time: "Updated 9:16 AM",
    left: "60%",
    top: "21%",
    color: "blue",
  },
  {
    id: 3,
    name: "Market Street",
    address: "301 E Main Street",
    status: "Complete",
    time: "Completed 9:38 AM",
    left: "73%",
    top: "68%",
    color: "green",
  },
  {
    id: 4,
    name: "Warehouse stop",
    address: "415 Central Avenue",
    status: "Needs pickup",
    time: "Added 9:02 AM",
    left: "39%",
    top: "74%",
    color: "coral",
  },
];

const filters = [
  "All pins",
  "Needs pickup",
  "In progress",
  "Complete",
] as const;
type Filter = (typeof filters)[number];

export default function SignTrackerDemo() {
  const [locations, setLocations] = useState(pins);
  const [selectedPin, setSelectedPin] = useState(pins[0]);
  const [filter, setFilter] = useState<Filter>("All pins");
  const [view, setView] = useState<"Map" | "List">("Map");
  const [showRoutes, setShowRoutes] = useState(true);
  const [showCompleted, setShowCompleted] = useState(true);

  const visiblePins = locations.filter((pin) => {
    if (filter !== "All pins" && pin.status !== filter) return false;
    if (!showCompleted && pin.status === "Complete") return false;
    return true;
  });

  function addSamplePin() {
    const nextId = Math.max(...locations.map((pin) => pin.id)) + 1;
    const newPin: SignPin = {
      id: nextId,
      name: `New sample pin ${nextId}`,
      address: "New map location",
      status: "Needs pickup",
      time: "Just added",
      left: `${24 + ((nextId * 17) % 52)}%`,
      top: `${28 + ((nextId * 19) % 45)}%`,
      color: "coral",
    };

    setLocations((current) => [...current, newPin]);
    setSelectedPin(newPin);
    setFilter("All pins");
    setShowCompleted(true);
    setView("Map");
  }

  return (
    <div className="tracker-app">
      <div className="tracker-topbar">
        <div className="tracker-brand">
          <span className="tracker-mark">S</span>
          <span>
            Sign <span className="tracker-brand-light">tracking</span>
          </span>
        </div>
        <div className="tracker-team">
          <span className="team-avatars">
            <i>J</i>
            <i>M</i>
            <i>+</i>
          </span>
          <span>3 online</span>
          <span className="online-dot" />
        </div>
      </div>
      <div className="tracker-subbar">
        <div>
          <span className="tracker-project-dot" />{" "}
          <strong>Chattanooga route</strong>
          <span className="tracker-day">Today</span>
        </div>
        <button
          className="add-pin-button"
          type="button"
          onClick={addSamplePin}
          aria-label="Add a sample pin"
        >
          + <span>Add pin</span>
        </button>
      </div>
      <div className="tracker-content">
        <div className="tracker-heading">
          <div>
            <p>CREW BOARD · TODAY</p>
            <h4>
              Good morning, crew <span>☀</span>
            </h4>
          </div>
          <div className="tracker-count">
            <strong>{visiblePins.length}</strong>
            <span>locations</span>
          </div>
        </div>
        <div className="tracker-toolbar">
          <div
            className="tracker-filters"
            role="group"
            aria-label="Filter locations"
          >
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={filter === item}
                className={
                  filter === item ? "filter-chip filter-active" : "filter-chip"
                }
                onClick={() => setFilter(item)}
              >
                {item === "All pins" ? "All" : item}
              </button>
            ))}
          </div>
          <div
            className="view-switch"
            role="group"
            aria-label="Choose map or list view"
          >
            <button
              type="button"
              aria-pressed={view === "Map"}
              className={view === "Map" ? "view-active" : ""}
              onClick={() => setView("Map")}
              aria-label="Map view"
            >
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="m2 4 4-2 4 2 4-2v10l-4 2-4-2-4 2V4Zm4-2v10m4-8v10" />
              </svg>
            </button>
            <button
              type="button"
              aria-pressed={view === "List"}
              className={view === "List" ? "view-active" : ""}
              onClick={() => setView("List")}
              aria-label="List view"
            >
              <svg viewBox="0 0 16 16" aria-hidden="true">
                <path d="M6 3h8M6 8h8M6 13h8M2 3h.01M2 8h.01M2 13h.01" />
              </svg>
            </button>
          </div>
        </div>
        {view === "Map" ? (
          <div className="tracker-map-layout">
            <div
              className="map-canvas"
              role="group"
              aria-label="Illustrated map with sample job locations"
            >
              <div className="map-water" />
              <div className="map-green-space map-park-one" />
              <div className="map-green-space map-park-two" />
              <div className="map-neighborhood">
                <span>RIVERFRONT</span>
                <span>NORTH SHORE</span>
                <span>DOWNTOWN</span>
                <span>WAREHOUSE ROW</span>
              </div>
              <svg
                className="map-streets"
                viewBox="0 0 500 320"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path d="M-20 70 100 95 230 65 520 92M-30 130l180-12 130 34 240-14M-30 218l165-45 130 42 240-25M42-10l44 100-12 105 70 150M164-20l-15 95 51 82-30 180M330-10 288 95l45 91-29 150M435-10 389 89l61 99-46 170" />
                <path
                  d="M-10 174 115 148 244 181 510 155M105-10l22 89 52 94-31 148M390-10l-28 105 53 83-42 152"
                  className="map-major-road"
                />
                {showRoutes && (
                  <path
                    d="M115 100c38 12 60 36 70 70s80 32 94 2 42-34 91-6"
                    className="map-route-line"
                  />
                )}
              </svg>
              <span className="map-label map-label-river">TENNESSEE RIVER</span>
              <span className="map-label map-label-park">Coolidge Park</span>
              {visiblePins.map((pin) => (
                <button
                  key={pin.id}
                  type="button"
                  className={`map-pin pin-${pin.color}${selectedPin.id === pin.id ? " pin-selected" : ""}`}
                  style={{ left: pin.left, top: pin.top }}
                  onClick={() => setSelectedPin(pin)}
                  aria-label={`Show ${pin.name}, ${pin.status}`}
                  aria-pressed={selectedPin.id === pin.id}
                >
                  <span>{pin.id}</span>
                </button>
              ))}
              <span className="map-scale">
                <i /> 500 ft
              </span>
              <span className="map-compass">
                N<span>↑</span>
              </span>
            </div>
            <aside className="map-sidebar">
              <div className="map-sidebar-heading">
                <span>LOCATION DETAILS</span>
                <span className="detail-menu">···</span>
              </div>
              <div className="location-preview">
                <span className={`location-thumb thumb-${selectedPin.color}`}>
                  <i>{selectedPin.id}</i>
                  <b>PHOTO</b>
                </span>
                <span className={`location-status status-${selectedPin.color}`}>
                  <i />
                  {selectedPin.status}
                </span>
              </div>
              <h5>{selectedPin.name}</h5>
              <p className="location-address">
                <svg viewBox="0 0 16 16" aria-hidden="true">
                  <path d="M13 6.5c0 4-5 8-5 8s-5-4-5-8a5 5 0 1 1 10 0Z" />
                  <circle cx="8" cy="6.5" r="1.5" />
                </svg>
                {selectedPin.address}
              </p>
              <div className="location-meta">
                <span>LAST UPDATE</span>
                <strong>{selectedPin.time}</strong>
              </div>
              <div className="map-layers">
                <span className="layers-label">MAP LAYERS</span>
                <label>
                  <input
                    type="checkbox"
                    checked={showRoutes}
                    onChange={(event) => setShowRoutes(event.target.checked)}
                  />
                  <i className="layer-route-icon" /> Crew route
                </label>
                <label>
                  <input
                    type="checkbox"
                    checked={showCompleted}
                    onChange={(event) => setShowCompleted(event.target.checked)}
                  />
                  <i className="layer-pin-icon" /> Completed pins
                </label>
              </div>
            </aside>
          </div>
        ) : (
          <div className="tracker-list" aria-label="Location list">
            {visiblePins.length ? (
              visiblePins.map((pin) => (
                <button
                  type="button"
                  key={pin.id}
                  className={`tracker-list-row${selectedPin.id === pin.id ? " list-row-selected" : ""}`}
                  onClick={() => setSelectedPin(pin)}
                >
                  <span className={`list-pin-icon pin-${pin.color}`}>
                    {pin.id}
                  </span>
                  <span className="list-row-main">
                    <strong>{pin.name}</strong>
                    <small>{pin.address}</small>
                  </span>
                  <span className={`list-status status-${pin.color}`}>
                    <i />
                    {pin.status}
                  </span>
                </button>
              ))
            ) : (
              <p className="empty-list">No locations match this filter.</p>
            )}
          </div>
        )}
        <div className="tracker-bottom">
          <span>
            <i className="tiny-green-dot" /> Team changes sync in real time
          </span>
          <span>Preview data</span>
        </div>
      </div>
    </div>
  );
}
