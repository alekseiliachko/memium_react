import React from "react";
import { withStore } from "../redux/testHelper";
import { MemoryRouter } from "react-router";
import { createMount } from "@material-ui/core/test-utils";
import { ArticleViewPage } from "./ArticleViewPage";
import { fetchArticleData } from "../redux/article/actions";
import { loadAvatar } from "../redux/user/actions";
import CommentsController from "../api/CommentsController";
jest.mock("../redux/user/actions");
jest.mock("../redux/article/actions");
jest.mock("../redux/allUsers/actions");
jest.mock("../api/CommentsController");

describe("article view page", () => {
  it("renders correctly", async () => {
    const Comp = withStore();

    loadAvatar.mockReturnValue({ type: "who_cares" });
    fetchArticleData.mockReturnValue({ type: "who_cares" });
    CommentsController.getComments.mockResolvedValue([]);

    const renderedValue = createMount()(
      <Comp>
        <MemoryRouter>
          <ArticleViewPage />
        </MemoryRouter>
      </Comp>
    );

    expect(renderedValue.html()).toMatchSnapshot();
  });
});
