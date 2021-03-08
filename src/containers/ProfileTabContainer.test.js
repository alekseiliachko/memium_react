import React from "react";
import renderer from "react-test-renderer";
import { withStore } from "../redux/testHelper";
import reactRouter, { MemoryRouter } from "react-router";
import { ProfileTabContainer } from "./ProfileTabContainer";
import { loadBl, loadLikedList, loadSubs } from "../redux/user/actions";
import { testData2 } from "../redux/testData2";
import AccountOpenController from "../api/AccountOpenController";
import ArticlesController from "../api/ArticlesController";

jest.mock("../api/AccountOpenController");
jest.mock("../api/ArticlesController");

jest.mock("../redux/user/actions", () => {
  return {
    loadBl: jest.fn(),
    loadLikedList: jest.fn(),
    loadSubs: jest.fn(),
  };
});

describe("profile tab container", () => {
  it("renders correctly without data tab 2", async () => {
    const Comp = withStore();
    let tree;

    reactRouter.useLocation = jest.fn().mockReturnValue({ search: "?tab=2" });
    loadBl.mockReturnValue({ type: "who_cares" });
    loadLikedList.mockReturnValue({ type: "who_cares" });
    loadSubs.mockReturnValue({ type: "who_cares" });

    await renderer.act(async () => {
      tree = renderer.create(
        <Comp>
          <MemoryRouter>
            <ProfileTabContainer />
          </MemoryRouter>
        </Comp>
      );
      await Promise.resolve();
    });

    expect(tree.toJSON()).toMatchSnapshot();
    expect(loadBl).toBeCalledTimes(1);
    expect(loadLikedList).toBeCalledTimes(1);
    expect(loadSubs).toBeCalledTimes(1);
  });

  it("renders correctly tab one", async () => {
    const Comp = withStore(testData2);
    let tree;

    reactRouter.useLocation = jest.fn().mockReturnValue({ search: "?tab=1" });

    loadBl.mockReturnValue({ type: "who_cares" });
    loadLikedList.mockReturnValue({ type: "who_cares" });
    loadSubs.mockReturnValue({ type: "who_cares" });

    AccountOpenController.getAccountsAvatar.mockResolvedValue("");
    AccountOpenController.getAccountsDetails.mockResolvedValue({
      data: { name: "" },
    });
    ArticlesController.getArticleImage.mockResolvedValue("");

    await renderer.act(async () => {
      tree = renderer.create(
        <Comp>
          <MemoryRouter>
            <ProfileTabContainer />
          </MemoryRouter>
        </Comp>
      );
      await Promise.resolve();
    });

    expect(tree.toJSON()).toMatchSnapshot();
    expect(loadBl).toBeCalledTimes(1);
    expect(loadLikedList).toBeCalledTimes(1);
    expect(loadSubs).toBeCalledTimes(1);
  });

  it("renders correctly tab zero", async () => {
    const Comp = withStore(testData2);
    let tree;

    reactRouter.useLocation = jest.fn().mockReturnValue({ search: "?tab=0" });

    loadBl.mockReturnValue({ type: "who_cares" });
    loadLikedList.mockReturnValue({ type: "who_cares" });
    loadSubs.mockReturnValue({ type: "who_cares" });

    await renderer.act(async () => {
      tree = renderer.create(
        <Comp>
          <MemoryRouter>
            <ProfileTabContainer />
          </MemoryRouter>
        </Comp>
      );
      await Promise.resolve();
    });

    expect(tree.toJSON()).toMatchSnapshot();
    expect(loadBl).toBeCalledTimes(1);
    expect(loadLikedList).toBeCalledTimes(1);
    expect(loadSubs).toBeCalledTimes(1);
  });

  it("renders correctly tab two", async () => {
    const Comp = withStore(testData2);
    let tree;

    reactRouter.useLocation = jest.fn().mockReturnValue({ search: "?tab=2" });

    loadBl.mockReturnValue({ type: "who_cares" });
    loadLikedList.mockReturnValue({ type: "who_cares" });
    loadSubs.mockReturnValue({ type: "who_cares" });

    await renderer.act(async () => {
      tree = renderer.create(
        <Comp>
          <MemoryRouter>
            <ProfileTabContainer />
          </MemoryRouter>
        </Comp>
      );
      await Promise.resolve();
    });

    expect(tree.toJSON()).toMatchSnapshot();
    expect(loadBl).toBeCalledTimes(1);
    expect(loadLikedList).toBeCalledTimes(1);
    expect(loadSubs).toBeCalledTimes(1);
  });
});
