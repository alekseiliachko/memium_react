import React from "react";
import renderer from "react-test-renderer";
import { CommentsCenter } from "./CommentsCenter";
import { withStore } from "../../redux/testHelper";
jest.mock("../../api/CommentsController");
import CommentsController from "../../api/CommentsController";

it("renders correctly", async () => {
  const Comp = withStore();
  let tree;

  CommentsController.getComments.mockResolvedValue([
    {
      id: "a4d3c5f2-a57d-42f6-8496-d192066855b4",
      authorId: "5d48bb9e-f1d9-41d2-bb02-9c4f578bd282",
      articleId: "5b28e638-ef12-45a7-b629-84350cc0c92e",
      content: "123",
      date: 1615047212491,
    },
  ]);

  await renderer.act(async () => {
    tree = renderer.create(
      <Comp>
        <CommentsCenter articleId={"d3268ef9-bb52-4967-b1ee-14826b9d8a18"} />
      </Comp>
    );
    await Promise.resolve();
  });

  expect(tree.toJSON()).toMatchSnapshot();
  expect(CommentsController.getComments).toHaveBeenCalled();
});
