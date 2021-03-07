import React from "react";
import renderer from "react-test-renderer";
import { SearchInput } from "./SearchInput";
import { withStore } from "../../redux/testHelper";

describe("search input", () => {
  it("renders correctly", async () => {
    let tree;
    const Comp = withStore();

    await renderer.act(async () => {
      tree = renderer.create(
        <Comp>
          <SearchInput />
        </Comp>
      );
      await Promise.resolve();
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });
});
