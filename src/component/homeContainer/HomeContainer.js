import React from "react";
import ImgDone from "../../asset/image/Done.png";
import "./HomeContainer.css";
import { Button } from "antd";
import { Link } from "react-router-dom";
import { ArrowRightOutlined } from "@ant-design/icons";
export default function HomeContainer() {
  return (
    <div className="home-container">
      <div className="banner">
        <img alt="img banner" src={ImgDone} className="img-banner" />
      </div>
      <div className="content">
        <p className="title-1">Welcome to </p>
        <h2 className="title-2"> OUR REMINDER</h2>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          dictum tempus, interdum at dignissim metus. Ultricies sed nunc.
        </p>
      </div>
      <div className="footer">
        <Link to="/register" className="button-getStarted">
          Get Started
          <ArrowRightOutlined className="arrow-right" />
        </Link>
      </div>
    </div>
  );
}
