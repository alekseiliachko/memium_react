import React from "react";
import renderer from "react-test-renderer";
import { withStore } from "../redux/testHelper";
import { MemoryRouter } from "react-router";
import { SignupFormContainer } from "./SignupContainer";

describe("signup container", () => {
  it("renders correctly", async () => {
    const Comp = withStore();
    let tree;

    await renderer.act(async () => {
      tree = renderer.create(
        <Comp>
          <MemoryRouter>
            <SignupFormContainer />
          </MemoryRouter>
        </Comp>
      );
      await Promise.resolve();
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
