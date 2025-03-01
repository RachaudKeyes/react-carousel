import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

// smoke test
it("renders without crashing", function() {
  render(<Card />);
});