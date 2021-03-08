import React from "react";
import renderer from "react-test-renderer";
import { withStore } from "../redux/testHelper";
import { MemoryRouter } from "react-router";
import { ProfileHeaderContainer } from "./ProfileHeaderContainer";
import { loadAvatar, loadDetails, loadSubs } from "../redux/user/actions";
import { LOADING_STATUS } from "../redux/user/reducer";

jest.mock("../redux/user/actions", () => {
  return {
    loadDetails: jest.fn(),
    loadAvatar: jest.fn(),
    loadSubs: jest.fn(),
  };
});

describe("profile header container", () => {
  it("renders correctly with data ready", async () => {
    const Comp = withStore();
    let tree;

    await renderer.act(async () => {
      tree = renderer.create(
        <Comp>
          <MemoryRouter>
            <ProfileHeaderContainer />
          </MemoryRouter>
        </Comp>
      );
      await Promise.resolve();
    });

    expect(tree.toJSON()).toMatchSnapshot();
  });

  it("renders correctly without data", async () => {
    const Comp = withStore({
      userReducer: {
        avatar: "",
        blackList: [],
        details: {
          bio: "",
          gender: "Another",
          name: "",
        },
        subs: [],
        likedList: [],
        avatarLoadingStatus: LOADING_STATUS.NOT_LOADED,
        detailsLoadingStatus: LOADING_STATUS.NOT_LOADED,
        subsLoadingStatus: LOADING_STATUS.NOT_LOADED,
        blackListLoadingStatus: LOADING_STATUS.NOT_LOADED,
        likedListLoadingStatus: LOADING_STATUS.NOT_LOADED,
        feedLoadingStatus: LOADING_STATUS.NOT_LOADED,
        feed: {},
        myArticles: [],
        myArticlesLoadingStatus: LOADING_STATUS.NOT_LOADED,
      },
    });
    let tree;

    loadAvatar.mockReturnValue({ type: "who_cares" });
    loadDetails.mockReturnValue({ type: "who_cares" });
    loadSubs.mockReturnValue({ type: "who_cares" });

    await renderer.act(async () => {
      tree = renderer.create(
        <Comp>
          <MemoryRouter>
            <ProfileHeaderContainer />
          </MemoryRouter>
        </Comp>
      );
      await Promise.resolve();
    });

    expect(tree.toJSON()).toMatchSnapshot();
    expect(loadAvatar).toBeCalledTimes(1);
  });
});
