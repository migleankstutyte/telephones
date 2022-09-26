import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PhonesList from "./PhonesList";

import { data } from "./constant";

const Phones = () => {
  const [phones, setPhones] = useState([]);

  const { brand: currentBrand } = useParams();
  const navigate = useNavigate();
  const [isActive, setSsActive] = useState(0);

  useEffect(() => {
    requestPhones();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentBrand]);

  async function requestPhones() {
    try {
      let favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
      const filteredByBrand = data
        .filter(({ brand }) => brand === currentBrand)
        .map((brand) => ({
          ...brand,
          isFavorite: favorites.includes(brand.contentKey),
        }));

      setPhones(filteredByBrand);
    } catch {
      navigate("/error");
    }
  }

  const removePhone = (id) => {
    const filteredById = phones.filter(({ contentKey }) => id !== contentKey);
    setPhones(filteredById);
  };

  const sortPhones = (value) => {
    const sortedPhones = phones.sort((a, b) => {
      setSsActive(value);
      return a.displayName.toLowerCase() < b.displayName.toLowerCase()
        ? value
        : a.displayName.toLowerCase() > b.displayName.toLowerCase()
        ? -value
        : 0;
    });
    setPhones([...sortedPhones]);
  };

  const toggleFavorite = (currentId) => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) ?? [];
    if (favorites.includes(currentId)) {
      const filteredFavorites = favorites.filter((id) => id !== currentId);
      localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
    } else {
      favorites.push(currentId);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    const updatedFavorites =
      JSON.parse(localStorage.getItem("favorites")) ?? [];
    const updatedPhones = phones.map((phone) => ({
      ...phone,
      isFavorite: updatedFavorites.includes(phone.contentKey),
    }));
    setPhones(updatedPhones);
  };

  return (
    <>
      <div className="text-align-left sorting">
        Sort by name
        <div className="sorting__arrows">
          <span
            onClick={() => sortPhones(-1)}
            className={isActive === -1 && "isActive"}
          >
            <i className="fa fa-chevron-up"></i>
          </span>
          <span
            onClick={() => sortPhones(1)}
            className={isActive === 1 && "isActive"}
          >
            <i className="fa fa-chevron-down"></i>
          </span>
        </div>
      </div>
      <PhonesList
        phones={phones}
        toggleFavorite={toggleFavorite}
        removePhone={removePhone}
      />
    </>
  );
};

export default Phones;
