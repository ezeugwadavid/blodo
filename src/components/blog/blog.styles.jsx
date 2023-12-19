import styled from "styled-components";
export const BlogContainer = styled.div`
  font-family: "Open Sans", sans-serif;
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 40px;
  padding-bottom: 70px;
  max-width: 1500px;
  margin: 0px auto;

  .title {
    color: #777;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
  }

  .title-desc {
    color: #000;
    text-align: center;
    font-family: "Manrope", sans-serif;
    font-size: 48px;
    font-style: normal;
    font-weight: 400;
    line-height: 72px;
    margin-bottom: 70px;
  }

  .blog-section {
    display: flex;
    margin-top: 70px;
    justify-content: space-between;
  }

  .blog-post-item {
    width: 30%;
  }

  .post-img {
    width: 100%;
  }

  .category-sec {
    display: flex;
    margin-top: 10px;
  }

  .category-text {
    color: #0a2640;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 28px;
    margin-right: 10px;
  }

  .date {
    color: #777;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 28px;
  }

  .post-content {
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    text-align: left;
  }

  .author-section {
    display: flex;
    margin-top: 30px;
  }

  .author-name {
    margin-top: auto;
    margin-bottom: auto;
    margin-left: 10px;
  }

  .load-btn {
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    width: 10%;
  }

  @media screen and (max-width: 800px) {
    .blog-section {
      display: flex;
      flex-direction: column;
      max-width: 100%;
      margin-top: 70px;
      justify-content: center;
    }

    .blog-post-item {
      width: 90%;
      margin-top: 50px;
      margin-left: auto;
      margin-right: auto;
    }

    .load-btn {
      margin-left: 3%;
      margin-right: 0px;
      margin-top: 50px;
      display: flex;
      justify-content: start;
      width: 50%;
    }
  }

  @media screen and (max-width: 400px) {
    .title-desc {
      color: #000;
      text-align: center;
      font-family: "Manrope", sans-serif;
      font-size: 40px;
      font-style: normal;
      font-weight: 400;
      line-height: 72px;
      margin-bottom: 70px;
    }
  }
`;
