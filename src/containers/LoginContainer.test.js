import React from "react";
import renderer from "react-test-renderer";
import { withStore } from "../redux/testHelper";
import { LoginFormContainer } from "./LoginContainer";
import { MemoryRouter } from "react-router";

describe("login container", () => {
  it("renders correctly", async () => {
    const Comp = withStore();
    let tree;

    await renderer.act(async () => {
      tree = renderer.create(
        <Comp>
          <MemoryRouter>
            <LoginFormContainer />
          </MemoryRouter>
        </Comp>
      );
      await Promise.resolve();
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
