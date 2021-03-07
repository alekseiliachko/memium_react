import React from "react";
import renderer from "react-test-renderer";
import { ProgressDecorator } from "./ProgressDecorator";
import { withStore } from "../../redux/testHelper";

describe("progress decorator", () => {
  it("renders correctly", async () => {
    let tree;

    await renderer.act(async () => {
      tree = renderer.create(<ProgressDecorator />);
      await Promise.resolve();
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
