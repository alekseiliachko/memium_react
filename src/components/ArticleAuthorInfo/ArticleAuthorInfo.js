import React, { useEffect } from "react";
import { Container, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const getArticleDate = (articleDate) => {
  const data = new Date(articleDate);
  const mo = new Intl.DateTimeFormat("en", { month: "short" }).format(data);
  const da = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(data);
  return `${mo} ${da}`;
};

const useStyles = makeStyles(() => ({
  articlePage: {
    marginTop: "70px",
  },
  imageContainer: {
    height: "300px",
    width: "100%",
    background: "green",
    margin: "20px 0px 30px",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
}));

export const ArticleView = ({ fetchArticleData, articleData }) => {
  useEffect(() => {
    // т.е. нету этих данных =)
    if (!articleData) {
      fetchArticleData();
    }
  }, [articleData]);
  const classes = useStyles();
  if (!articleData) {
    // Данные еще не поступили
    return null;
  }

  return (
    <Container maxWidth="sm" className={classes.articlePage}>
      <Typography variant="subtitle2">
        {getArticleDate(articleData.date)}
      </Typography>
      <Typography variant="h3">{articleData.title}</Typography>
      {
        // articleData.imageUrl ?
        <Box className={classes.imageContainer}>
          <img
            className={classes.image}
            src={
              "https://yandex.ru/images/_crpd/U5Wo6S085/9b6ca6HuoNSU/zNO7N_GSHQ_euLOAgGT9YgdfpXqnmv6KIO4JOZzrckzcNoK-V6xTLZ5DYtO3OBj2j6iIMKCQP35HMB606mQQkPlneoLwpznKvGzXVWWl6aYXLyBf0z4uD3Sq7Nxdj_PZrOGDzpeIZjsuwzLyRcq6x2jbT_YCJ9j8s6VrAS-wEXTYJLwz46E_Pz-L9HLjBKnzxd90qaddPJtjSuk5vO3SjRxHM74VKEb6e7anFYbZ-Gb6yp2mMJaoTQN26MAuwvd1aFVtBrDQfs1Nu3Ry4YdpcaVd9bg0Xq8bAOjZOJ4u8v8st1LNtNjEu5kmVYeXuTtHW_pcVXCH6e_SVunwLXD3F9oWbpUg0X1NHDkEQMG0mqNFD7QaR37O-TAISGpPDoPcLBQhXvSqdXp5VjXkVXnYBwmqHGeg5qr-IJVroz9hZvUYdh6kY9DMbxw7BECy5ZqhNi-EWuWObqthOol5fZ7Tvr2Hk3222Bf5SQSXt6RZ-acYa-xmche6PyFFudM_oBSFG7Qfl2HhbT1dWiQTEocIk1fPtglmvv7JQyhrGK3tEd-9dUKsNNpEGhjUJHcHCAtFScrcBcHnaAxy9PhhHwFG9Qu2XtSDwo89PXv2UiE1C8C1D_ZIBr1eq0FLmTuezfBNLAdQHDVatIr7BYVXlnk6VHibv6RiVfsv0zeL8A-w1aXrpfzEsHNPTV7rJ5AwpMri9Q50mrZs_Xqyi-mKXqyxTp3WEn816DXIe7QGVWT7aAcpuf4GQBfa7iLU-bIs8XSW-DV-9RISLt5vqIRisTWa07Rt9Av2nUyKU1gqGN-dQax-tAINtcpV6rp3l7Qnual0G4htdmHGKAzjR4szXNGFxXtnHYaSMmwfvbr1sKJVirEFvjWIVzx_GCO7als_LTFN_GUgzoQ4NDlaxbVHVUh4Ffm4r6ZB9vp-cHcbQY0ix8b613yVY1BPbRz7B1MTZRsx5bzlqHSNX3vQOfsro"
            }
            alt=""
          />
        </Box>
        // : null
      }
      <div dangerouslySetInnerHTML={{ __html: articleData.data }} />
    </Container>
  );
};
