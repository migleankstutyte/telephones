import React from "react";
import Brand from "../Brand";

const BrandsList = ({ brands }) => {
  return (
    <>
      {brands?.map((phone) => {
        const { id, displayName, displayImageUrl } = phone;
        return (
          <div className="col-sm" key={id}>
            <Brand
              displayName={displayName}
              displayImageUrl={displayImageUrl}
              id={id}
            />
          </div>
        );
      })}
    </>
  );
};

export default BrandsList;
