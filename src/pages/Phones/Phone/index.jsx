import React from "react";

const Phone = ({ phone, toggleFavorite, removePhone }) => {
  const {
    displayName,
    pricePrefix,
    price,
    priceSuffix,
    imgUrl,
    internalMemoryGB,
    dualSIM,
    networkTechnology,
    colorOptions,
    link,
    contentKey,
    isFavorite,
  } = phone;

  return (
    <div className="col-xl-3 col-lg-6 mb-5" key={contentKey}>
      <div className="d-flex flex-column mr-2 ml-2">
        <div className="mx-auto">
          <div className="image">
            <img alt="Apple" src={imgUrl} />
          </div>
        </div>
        <div className="title title__phone">
          <a href={link} target="_blank" rel="noreferrer">
            {displayName}
          </a>
          <div>
            <button onClick={() => toggleFavorite(contentKey)}>
              <i
                className={`fa fa-heart fa-lg ${isFavorite && "favorite"}`}
              ></i>
            </button>
            <button
              onClick={() => removePhone(contentKey)}
              data-testid="remove"
            >
              <i className="fa fa-trash"></i>
            </button>
          </div>
        </div>
        <div className="d-flex align-items-center mb-2 justify-content-between">
          <span className="name">{pricePrefix} </span>
          <span>
            {price} {priceSuffix}
          </span>
        </div>
        <div className="d-flex align-items-center mb-2 justify-content-between">
          <span className="name">Memory </span>
          <div className="buttonsContainer">
            {internalMemoryGB.map((item) => {
              return (
                <button key={item} className="circle">
                  {item}
                </button>
              );
            })}
          </div>
        </div>
        <div className="d-flex align-items-center mb-2 justify-content-between">
          <span className="name">Dual SIM </span>
          {dualSIM ? <span>&#10004;</span> : <span>&#10006;</span>}
        </div>
        <div className="networkContainer">
          {networkTechnology.map((item) => {
            return (
              <div
                className="d-flex align-items-center mb-2 justify-content-between"
                key={item}
              >
                <span className="name">{item.toUpperCase()} </span>
                <span>&#10004;</span>
              </div>
            );
          })}
        </div>
        <div className="d-flex align-items-center mb-2 justify-content-between">
          <span className="name">Color </span>
          <div className="buttonsContainer">
            {colorOptions.map((item) => {
              return (
                <div
                  tabIndex="0"
                  role="button"
                  className="circle colors"
                  style={{ background: `${item.hex}` }}
                  key={`${item.name}-${item.hex}`}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;
