import React from "react";
import { withStore } from "../redux/testHelper";
import { MemoryRouter } from "react-router";
import { createMount } from "@material-ui/core/test-utils";
import { fetchArticleData } from "../redux/article/actions";
import { loadAvatar } from "../redux/user/actions";
import { AuthorsArticlesPage } from "./AuthorsArticlesPage";
import { fetchUserAvatar, fetchUserData } from "../redux/allUsers/actions";

jest.mock("../redux/user/actions");
jest.mock("../redux/article/actions");
jest.mock("../redux/allUsers/actions");
jest.mock("../api/CommentsController");

describe("article view page", () => {
  it("renders correctly", async () => {
    const Comp = withStore();

    loadAvatar.mockReturnValue({ type: "who_cares" });
    fetchArticleData.mockReturnValue({ type: "who_cares" });
    fetchUserAvatar.mockReturnValue({ type: "who_cares" });
    fetchUserData.mockReturnValue({ type: "who_cares" });

    const renderedValue = createMount()(
      <Comp>
        <MemoryRouter>
          <AuthorsArticlesPage />
        </MemoryRouter>
      </Comp>
    );

    expect(renderedValue.html()).toMatchSnapshot();
  });
});
