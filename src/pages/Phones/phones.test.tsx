import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Phones from "./index";

const phones = [
  {
    brand: "Apple",
    displayName: "Apple iPhone 8",
    contentKey: "apple-iphone-8",
    price: "529.0",
    pricePrefix: "Price",
    priceSuffix: "Eur",
    internalMemoryGB: [32, 64, 128, 256],
    dualSIM: "",
    screenSize: "",
    networkTechnology: ["2g", "3g", "4g"],
    colorOptions: [
      {
        name: "Grey",
        hex: "#444446",
      },
      {
        name: "Gold",
        hex: "#f8e9df",
      },
    ],
    imgUrl:
      "https://ksd-images.lt/display/aikido/store/4b2c78cf2db5d6e11740c7c2457f936c.jpg?h=742&w=816",
    link: "https://www.senukai.lt/p/mobilusis-telefonas-apple-iphone-8-pilkas-2gb-64gb/5icg?mtd=search&pos=regular&src=searchnode",
  },
  {
    brand: "Apple",
    displayName: "Apple iPhone 8",
    contentKey: "apple-iphone-8",
    price: "529.0",
    pricePrefix: "Price",
    priceSuffix: "Eur",
    internalMemoryGB: [32, 64, 128, 256],
    dualSIM: "",
    screenSize: "",
    networkTechnology: ["2g", "3g", "4g"],
    colorOptions: [
      {
        name: "Grey",
        hex: "#444446",
      },
      {
        name: "Gold",
        hex: "#f8e9df",
      },
    ],
    imgUrl:
      "https://ksd-images.lt/display/aikido/store/4b2c78cf2db5d6e11740c7c2457f936c.jpg?h=742&w=816",
    link: "https://www.senukai.lt/p/mobilusis-telefonas-apple-iphone-8-pilkas-2gb-64gb/5icg?mtd=search&pos=regular&src=searchnode",
  },
];

describe("phones component", () => {
  test("renders phone brand", () => {
    render(
      <Router>
        <Phones />
      </Router>
    );

    const sorting = screen.getByText(/Sort by name/i);
    expect(sorting).toBeInTheDocument();
  });
});
