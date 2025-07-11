import React, { useEffect, useState } from "react";
import "./CatDiscover.css";
import "../App.css";

const API_KEY =
  "live_uLtibPy5PY58yDjEaNgbionugmWPOf22a6RJmCoGdMCYdXsGeMABaXiKOtweplwj";

export default function CatDiscover() {
  const [cat, setCat] = useState(null);
  const [banList, setBanList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCat = async (retryCount = 0) => {
    setIsLoading(true);

    const res = await fetch(
      "https://api.thecatapi.com/v1/images/search?has_breeds=1" +
        `&api_key=${API_KEY}`,
      {
        headers: {
          "x-api-key": API_KEY,
        },
      }
    );
    const data = await res.json();
    const catData = data[0];

    if (!catData || !catData.breeds || catData.breeds.length === 0) {
      if (retryCount < 10) return fetchCat(retryCount + 1);
      else return setIsLoading(false);
    }

    const breedInfo = catData.breeds[0];
    const newCat = {
      name: breedInfo.name,
      image: catData.url,
      breedInfo: breedInfo.name,
      weight: breedInfo.weight.metric,
      origin: breedInfo.origin,
      lifespan: breedInfo.life_span,
    };

    // Check if the breed is in the ban list
    const isBanned = [
      newCat.breed,
      newCat.weight,
      newCat.origin,
      newCat.lifespan,
    ].some((attr) => banList.includes(attr));

    if (isBanned && retryCount < 10) return fetchCat(retryCount + 1);

    setCat(newCat);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchCat();
  }, []);

  const toggleBan = (item) => {
    setBanList((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div className="cat-discover-container">
      <h1 className="discoveryCat">Veni vici!</h1>
      <p className="discoveryDescription">
        Discovery cats from your wildest dreams!
      </p>
      <p>🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱</p>

      {/* Cat Information to display */}
      {cat && (
        <div className="text-white">
          <h2 className="text-2xl font-semibold mb-2">{cat.name}</h2>
          <div className="flex flex-wrap justify-center gap-2 mb-4">
            <button
              className="attribute-btn"
              onClick={() => toggleBan(cat.breedInfo)}
            >
              {cat.breedInfo}
            </button>
            <button
              className="attribute-btn"
              onClick={() => toggleBan(cat.weight)}
            >
              {cat.weight} lbs
            </button>
            <button
              className="attribute-btn"
              onClick={() => toggleBan(cat.origin)}
            >
              {cat.origin}
            </button>
            <button
              className="attribute-btn"
              onClick={() => toggleBan(cat.lifespan)}
            >
              {cat.lifespan} years
            </button>
          </div>
          <img
            src={cat.image}
            alt="cat"
            className="rounded shadow mx-auto w-full"
          />
        </div>
      )}

      <div className="cat-info-container">
        <div className="ban-list-container">
          <h2 className="banList">Ban List:</h2>
          {banList.length === 0 ? (
            <p className="text-gray-500">(None)</p>
          ) : (
            banList.map((item, index) => (
              <span
                key={index}
                className="banListItem"
                onClick={() => toggleBan(item)}
              >
                {item}
              </span>
            ))
          )}
        </div>
        <button onClick={fetchCat} className="button" disabled={isLoading}>
          {isLoading ? "Loading..." : "Discover Cat"}
        </button>
      </div>
    </div>
  );
}
