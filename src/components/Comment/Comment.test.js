import React from "react";
import renderer from "react-test-renderer";

import { Comment } from "./Comment";
import { withStore } from "../../redux/testHelper";

it("renders correctly", async () => {
  let tree;

  const Comp = withStore();
  const deleteCommentMock = jest.fn();
  await renderer.act(async () => {
    tree = renderer.create(
      <Comp>
        <Comment
          deleteComment={deleteCommentMock}
          isOwn={true}
          comment={{
            id: "a4d3c5f2-a57d-42f6-8496-d192066855b4",
            authorId: "5d48bb9e-f1d9-41d2-bb02-9c4f578bd282",
            articleId: "5b28e638-ef12-45a7-b629-84350cc0c92e",
            content: "123",
            date: 1615047212491,
          }}
        />
      </Comp>
    );
    await Promise.resolve();
  });

  expect(tree.toJSON()).toMatchSnapshot();
});
