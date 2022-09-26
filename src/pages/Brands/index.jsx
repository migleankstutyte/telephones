import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BrandsList from "./BrandsList";
import { data } from "./constant";

const Brands = () => {
  const [brands, setBrands] = useState([]);
  const navigate = useNavigate();

  const removeBrand = (currentId) => {
    const filteredById = brands.filter(({ id }) => id !== currentId);
    setBrands(filteredById);
  };

  useEffect(() => {
    requestBrands();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function requestBrands() {
    try {
      setBrands(data.options);
    } catch {
      navigate("/error");
    }
  }

  return (
    <div className="container">
      <div className="row">
        <BrandsList brands={brands} removeBrand={removeBrand} />
      </div>
    </div>
  );
};

export default Brands;
