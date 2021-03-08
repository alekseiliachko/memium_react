import React from "react";
import { MemoryRouter } from "react-router";
import { createMount } from "@material-ui/core/test-utils";
import { AuthorCard } from "./index";
import { withStore } from "../../redux/testHelper";

jest.mock("../../api/ArticlesController");
jest.mock("../../api/AccountOpenController");
jest.mock("../../api/CommentsController");

const props = {
  data: {
    accountId: "22bb3fe5-185c-4c87-8633-1586586506b7",
    username: "zilber",
    name: null,
    bio: "populated",
    imageData: null,
  },
  onSub: jest.fn(),
  onDelete: jest.fn(),
  subbed: true,
};

describe("author card", () => {
  it("renders correctly", async () => {
    const Comp = withStore();

    const renderedValue = createMount()(
      <Comp>
        <MemoryRouter>
          <AuthorCard {...props} />
        </MemoryRouter>
      </Comp>
    );

    expect(renderedValue.html()).toMatchSnapshot();
  });
});
