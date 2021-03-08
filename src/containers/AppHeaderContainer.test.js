import React from "react";
import { withStore } from "../redux/testHelper";
import { MemoryRouter } from "react-router";
import { createMount } from "@material-ui/core/test-utils";
import { AppHeaderContainer } from "./AppHeaderContainer";
import { loadAvatar } from "../redux/user/actions";
jest.mock("../redux/user/actions");

describe("appheader creation page", () => {
  it("renders correctly", async () => {
    const Comp = withStore();

    loadAvatar.mockReturnValue({ type: "who_cares" });

    const renderedValue = createMount()(
      <Comp>
        <MemoryRouter>
          <AppHeaderContainer />
        </MemoryRouter>
      </Comp>
    );

    expect(renderedValue.html()).toMatchSnapshot();
  });
});
