import React from "react";

import { rest } from "msw";
import { setupServer } from "msw/node";

import {
  render,
  fireEvent,
  waitFor,
  screen,
  findByText,
} from "@testing-library/react";
import "@testing-library/jest-dom";

import { AllMeetUps, DB_URL } from "./AllMeetUps";
import { MeetupList } from "../components/meetups/MeetupList";

const apiRespMock = {
  "-N7piaTUs9IXRLj_CTUH": {
    address: "lthis is some address",
    description: "this is some descriptiom",
    imgUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    title: "New meetup",
  },
};

const server = setupServer(
  rest.get(DB_URL, (req, res, ctx) => {
    return res(ctx.json(apiRespMock));
  })
);

beforeAll(() => server.listen());
beforeEach(() => {
  const setStateMock = jest.fn();
  const setStateHandler = (state) => [state, setStateMock];
  jest.spyOn(React, "useState").mockImplementation(setStateHandler);
});
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const mockChildComponent = jest.fn();
// jest.mock("../components/meetups/MeetupList", () => ({
//   __esModule: true, // only required for ES6 modules.
//   MeetupList: jest.fn(() => <div data-testid="MeetupList" />),
// }));

// jest.mock("../components/meetups/MeetupList", () => (props) => {
//   mockChildComponent(props);
//   return <MockChildComponent />;
// });

test("should render loading", () => {
  render(<AllMeetUps />);

  expect(screen.getByText("Loading...")).toBeInTheDocument();
});

test("should render heading on api success call", async () => {
  render(<AllMeetUps />);
  const heading = await waitFor(() => screen.getByRole("heading"));
  expect(heading).toBeInTheDocument();
  expect(heading).toHaveTextContent("All Meet Ups");
});

test("should render MeetupList component on api success call", async () => {
  render(<AllMeetUps />);
  // await waitFor(() => screen.getByRole("heading"));
  expect(screen.queryByTestId("MeetupList")).toBeInTheDocument();
});

test("should render Meetuplist with mocked api response", async () => {
  render(<AllMeetUps />);
  await waitFor(() => screen.getByRole("heading"));
  expect(MeetupList).toHaveBeenCalledWith(
    expect.objectContaining({ listItems: apiRespMock }),
    expect.anything()
  );
});
