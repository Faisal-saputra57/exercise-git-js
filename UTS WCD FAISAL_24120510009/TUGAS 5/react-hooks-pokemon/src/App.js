import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Particles from "react-tsparticles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useSound from 'use-sound';

const pokemonData = [
  { id: 1, name: "Haxorus", type: "Dragon", hp: 184, attack: 147, defense: 90 },
  { id: 2, name: "Emboar", type: "Fire", hp: 110, attack: 123, defense: 65 },
];

function App() {
  const [selected, setSelected] = useState(pokemonData[0]);
  const [darkMode, setDarkMode] = useState(true);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  // ✅ Panggil useSound di dalam function App()
  const [play] = useSound('/sounds/select.mp3', { volume: 0.5 });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.title = `${selected.name} Selected`;
  }, [selected]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <div className={`app-container ${darkMode ? "dark" : "light"}`}>
      {/* 🔹 PARTICLE BACKGROUND */}
      <Particles
        options={{
          background: {
            color: { value: darkMode ? "#1e1e2f" : "#f5f5f5" }
          },
          particles: {
            number: { value: 50 },
            color: { value: "#ffffff" },
            size: { value: 2 },
            move: { enable: true, speed: 0.5 },
            opacity: { value: 0.2 },
            links: { enable: true, color: "#ffffff", opacity: 0.1 }
          },
          fullScreen: { enable: false }
        }}
        style={{
          position: "absolute",
          zIndex: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* 🔹 UI CONTENT */}
      <button className="toggle-mode" onClick={toggleDarkMode}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search Pokémon..."
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="sort-dropdown"
        >
          <option value="name">Sort by Name</option>
          <option value="hp">Sort by HP</option>
          <option value="attack">Sort by Attack</option>
        </select>
      </div>

      <h1>Pokémon List</h1>

      <Slider {...sliderSettings} className="pokemon-list">
        {[...pokemonData]
          .filter((p) =>
            p.name.toLowerCase().includes(search.toLowerCase())
          )
          .sort((a, b) => {
            if (sortBy === "name") return a.name.localeCompare(b.name);
            return b[sortBy] - a[sortBy];
          })
          .map((p) => (
            <div
              key={p.id}
              className={`pokemon-card ${selected.name === p.name ? "active" : ""}`}
              onClick={() => {
                play(); // 🔊 SOUND!
                setSelected(p);
              }}
            >
              <img
                src={`/${p.name.toLowerCase()}.png`}
                alt={p.name}
                className="pokemon-image"
              />
              <h2>{p.name}</h2>
              <p>{p.type}</p>
            </div>
          ))}
      </Slider>

      <motion.div
        className="pokemon-detail"
        key={selected.name}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h2>{selected.name}</h2>
        <p>HP: {selected.hp}</p>
        <p>Attack: {selected.attack}</p>
        <p>Defense: {selected.defense}</p>
      </motion.div>
    </div>
  );
}

export default App;
