import React from "react";
import { Link } from "react-router-dom";

const Brand = ({ id, displayName, displayImageUrl }) => {
  return (
    <>
      <Link to={`/telephones/${id}`} className="text-decoration-none">
        <div className="d-flex justify-content-around mb-5">
          <div className="image image--main">
            <img alt={id} src={displayImageUrl} />
            <span className="d-block mt-3 name name__phones">
              {displayName}
            </span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Brand;
