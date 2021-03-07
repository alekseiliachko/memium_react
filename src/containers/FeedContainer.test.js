import React from "react";
import renderer from "react-test-renderer";
import { FeedContainer } from "./FeedContainer";
import { withStore } from "../redux/testHelper";
import reactRouter from "react-router";

describe("feed container", () => {
  it("renders correctly", async () => {
    const Comp = withStore();
    let tree;

    reactRouter.useLocation = jest.fn().mockReturnValue({ search: "?tab=2" });

    await renderer.act(async () => {
      tree = renderer.create(
        <Comp>
          <FeedContainer />
        </Comp>
      );
      await Promise.resolve();
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
