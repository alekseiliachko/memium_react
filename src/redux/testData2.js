export const testData2 = {
  authReducer: {
    username: "alex",
    authState: "SUCCESS",
  },
  userReducer: {
    avatar: "blob:http://localhost:3000/713f9c81-76c4-4f3f-b361-b0da3e8e3c4a",
    blackList: [
      {
        accountId: "32df86b7-872d-45d5-8a51-e217f0bc973d",
        username: "bob",
        name: null,
        bio: "populated",
        imageData: null,
      },
    ],
    details: {
      accountId: "5d48bb9e-f1d9-41d2-bb02-9c4f578bd282",
      name: "Круто чел",
      bio: "populated",
      gender: "gender",
      dob: 1615046987793,
    },
    subs: [
      {
        accountId: "22bb3fe5-185c-4c87-8633-1586586506b7",
        username: "zilber",
        name: null,
        bio: "populated",
        imageData: null,
      },
    ],
    likedList: [
      {
        id: "9064e587-3c29-4547-a5a6-51a8149456f8",
        imageUrl: null,
        authorId: "5d48bb9e-f1d9-41d2-bb02-9c4f578bd282",
        title: "Русские мемчанские",
        description: null,
        date: 1615046988090,
        category: "Anime",
      },
      {
        id: "d3268ef9-bb52-4967-b1ee-14826b9d8a18",
        imageUrl: null,
        authorId: "22bb3fe5-185c-4c87-8633-1586586506b7",
        title: "Chem?",
        description: null,
        date: 1615046988090,
        category: "Chemistry",
      },
      {
        id: "5d8e2ff1-21bc-4fe0-936f-851407318748",
        imageUrl: null,
        authorId: "32df86b7-872d-45d5-8a51-e217f0bc973d",
        title: "It?",
        description: null,
        date: 1615046988090,
        category: "IT",
      },
      {
        id: "5b28e638-ef12-45a7-b629-84350cc0c92e",
        imageUrl: null,
        authorId: "5d48bb9e-f1d9-41d2-bb02-9c4f578bd282",
        title: "Bio?",
        description: null,
        date: 1615047293904,
        category: "IT",
      },
    ],
    avatarLoadingStatus: "LOADED",
    detailsLoadingStatus: "LOADED",
    subsLoadingStatus: "LOADED",
    blackListLoadingStatus: "LOADED",
    likedListLoadingStatus: "LOADED",
    feedLoadingStatus: "LOADED",
    feed: {
      articles: [
        {
          id: "d3268ef9-bb52-4967-b1ee-14826b9d8a18",
          imageUrl: null,
          authorId: "22bb3fe5-185c-4c87-8633-1586586506b7",
          title: "Chem?",
          description: null,
          date: 1615046988090,
          category: "Chemistry",
        },
      ],
      accounts: [
        {
          accountId: "22bb3fe5-185c-4c87-8633-1586586506b7",
          username: "zilber",
          name: null,
          bio: "populated",
          imageData: null,
        },
      ],
    },
    myArticles: [],
    myArticlesLoadingStatus: "NOT_LOADED",
  },
  articleReducer: {
    articleDataById: {
      "5b28e638-ef12-45a7-b629-84350cc0c92e": {
        id: "5b28e638-ef12-45a7-b629-84350cc0c92e",
        imageUrl: null,
        description: null,
        authorId: "5d48bb9e-f1d9-41d2-bb02-9c4f578bd282",
        title: "Bio?",
        date: 1615047293904,
        category: "IT",
        data:
          "<div><p>Рассмотрим две <b>штуки</b></p><p>Первое:</p><p><b><br></b></p></div>",
      },
    },
    articleIdsByAuthorName: {},
  },
  allUsersReducer: {
    userDataById: {
      "5d48bb9e-f1d9-41d2-bb02-9c4f578bd282": {
        accountId: "5d48bb9e-f1d9-41d2-bb02-9c4f578bd282",
        name: "Круто чел",
        bio: "populated",
        gender: "gender",
        dob: 1615046987793,
        avatar:
          "blob:http://localhost:3000/591e585d-6418-41be-bc34-1859656565a2",
      },
    },
  },
  searchReducer: {
    articles: [],
    authors: [],
  },
};
