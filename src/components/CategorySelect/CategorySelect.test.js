import React from "react";
import renderer from "react-test-renderer";
import { CategorySelect } from "./index";

describe("category select", () => {
  it("all categories render correctly", async () => {
    let tree;

    renderer.act(() => {
      tree = renderer.create(<CategorySelect tab={0} />);
    });

    expect(tree.toJSON()).toMatchSnapshot();

    for (let i = 1; i < 6; i++) {
      renderer.act(() => {
        tree.update(<CategorySelect tab={i} />);
      });

      expect(tree.toJSON()).toMatchSnapshot();
    }
  });
});
