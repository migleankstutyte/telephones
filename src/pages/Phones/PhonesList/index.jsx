import React from "react";
import Phone from "../Phone";

const PhonesList = ({ phones, toggleFavorite, removePhone }) => {
  return (
    <div className="container mt-5">
      <div className="row">
        {phones.map((phone) => {
          return (
            <Phone
              phone={phone}
              toggleFavorite={toggleFavorite}
              removePhone={removePhone}
              key={phone.contentKey}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PhonesList;
