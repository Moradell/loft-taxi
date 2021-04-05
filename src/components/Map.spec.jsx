import React from "react";
import { Map } from "./Map";
import { render } from "@testing-library/react";
import mapbox from "mapbox-gl";

jest.mock("mapbox-gl", () => ({
  Map: jest.fn(() => ({ remove: () => { } })),
}));

describe("Map", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<Map />);
    expect(mapbox.Map).toHaveBeenCalledWith({
      center: [37.6156, 55.7522],
      container: getByTestId('map'),
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 9,
    });
  });
});