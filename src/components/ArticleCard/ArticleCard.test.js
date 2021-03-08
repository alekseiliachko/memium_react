import React from "react";
import { MemoryRouter } from "react-router";
import { createMount } from "@material-ui/core/test-utils";
import { ArticleCard } from "./index";
import ArticlesController from "../../api/ArticlesController";
import CommentsController from "../../api/CommentsController";
import AccountOpenController from "../../api/AccountOpenController";
jest.mock("../../api/ArticlesController");
jest.mock("../../api/AccountOpenController");
jest.mock("../../api/CommentsController");

const props = {
  data: {
    id: "5b28e638-ef12-45a7-b629-84350cc0c92e",
    imageUrl: null,
    authorId: "5d48bb9e-f1d9-41d2-bb02-9c4f578bd282",
    title: "Bio?",
    description: null,
    date: 1615047293904,
    category: "IT",
  },
  onLike: jest.fn(),
  onUnLike: jest.fn(),
  liked: true,
};

describe("article card", () => {
  it("renders correctly", async () => {
    ArticlesController.getArticleImage.mockResolvedValue("");
    AccountOpenController.getAccountsDetails.mockResolvedValue({
      data: { name: "" },
    });
    CommentsController.getComments.mockResolvedValue([]);

    const renderedValue = createMount()(
      <MemoryRouter>
        <ArticleCard {...props} />
      </MemoryRouter>
    );

    expect(renderedValue.html()).toMatchSnapshot();
  });
});
