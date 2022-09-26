import { render, screen } from "@testing-library/react";
import * as router from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import BrandsList from ".";
const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});
test("renders phone brand", () => {
  render(
    <Router>
      <BrandsList id="alcatel" displayName="alcatel" displayImageUrl="url" />
    </Router>
  );

  const phone = screen.getByText(/Alcatel/i);
  expect(phone).toBeInTheDocument();
});
