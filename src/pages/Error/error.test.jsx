import { render, screen } from "@testing-library/react";
import * as router from "react-router";
import Error from "./index";

const navigate = jest.fn();

beforeEach(() => {
  jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
});
test("renders error page", () => {
  render(<Error />);

  const mainMessage = screen.getByText(/Page not found/i);
  const additionalMessage = screen.getByText(
    /Sorry, the page you specified does not exist or has been moved./i
  );

  expect(mainMessage).toBeInTheDocument();
  expect(additionalMessage).toBeInTheDocument();
});
