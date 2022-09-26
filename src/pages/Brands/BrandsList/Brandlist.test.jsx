import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import BrandList from ".";

const brands = [
  {
    id: "Alcatel",
    displayName: "Alcatel",
    displayImageUrl:
      "https://ksd-images.lt/display/aikido/cache/6f9bed3a2e7d07a2b65ce17f6dfb7826.jpeg?h=742&w=816",
  },
  {
    id: "Apple",
    displayName: "Apple",
    displayImageUrl:
      "https://ksd-images.lt/display/aikido/cache/7c2503e9edfd34245f31ff0b1c92e11a.jpeg?h=742&w=816",
  },
];

describe("BrandList component", () => {
  test("renders BrandList component", () => {
    render(
      <Router>
        <BrandList brands={brands} />
      </Router>
    );

    const images = screen.getAllByRole("img");
    expect(images).toHaveLength(2);
  });
});
