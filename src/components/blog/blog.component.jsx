import React from "react";
import { BlogContainer } from "./blog.styles";
import Button from "../button/button.component";
import PostAvatar1 from "../../assets/post-avatar1.svg";
import PostAvatar2 from "../../assets/post-avatar2.svg";
import PostAvatar3 from "../../assets/post-avatar3.svg";
import PostImage3 from "../../assets/post3-img.svg";
import PostImage2 from "../../assets/post2-img.svg";
import PostImage1 from "../../assets/post1-img.svg";

const Blog = () => (
  <BlogContainer>
    <div className="title">Our Blog</div>
    <div className="title-desc">
      Value proposition accelerator product management venture
    </div>
    <div className="blog-section">
      <div className="blog-post-item">
        <img className="post-img" src={PostImage1} alt="" />
        <div className="category-sec">
          <div className="category-text">Category</div>
          <div className="date">November 22, 2021</div>
        </div>
        <div className="post-content">
          Pitch termsheet backing validation focus release.
        </div>
        <div className="author-section">
          <img className="author-avatar" src={PostAvatar1} alt="" />
          <div className="author-name">Chandler Bing</div>
        </div>
      </div>

      <div className="blog-post-item">
        <img className="post-img" src={PostImage2} alt="" />
        <div className="category-sec">
          <div className="category-text">Category</div>
          <div className="date">November 22, 2021</div>
        </div>
        <div className="post-content">
          Pitch termsheet backing validation focus release.
        </div>
        <div className="author-section">
          <img className="author-avatar" src={PostAvatar2} alt="" />
          <div className="author-name">Rachel Green</div>
        </div>
      </div>

      <div className="blog-post-item">
        <img className="post-img" src={PostImage3} alt="" />
        <div className="category-sec">
          <div className="category-text">Category</div>
          <div className="date">November 22, 2021</div>
        </div>
        <div className="post-content">
          Pitch termsheet backing validation focus release.
        </div>
        <div className="author-section">
          <img className="author-avatar" src={PostAvatar3} alt="" />
          <div className="author-name">Monica Geller</div>
        </div>
      </div>
    </div>
    <div className="load-btn">
      <Button color="#0A2640" bgcolor="#FFF">
        Load more
      </Button>
    </div>
  </BlogContainer>
);

export default Blog;
