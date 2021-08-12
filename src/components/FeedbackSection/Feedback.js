import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Feedback.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";

const NextBtn = (props) => {
  return (
    <div className={props.className} onClick={props.onClick}>
      <IoIosArrowForward style={{ color: "black", fontSize: "30px" }} />
    </div>
  );
};
const PrevBtn = (props) => {
  return (
    <div className={props.className} onClick={props.onClick}>
      <IoIosArrowBack style={{ color: "black", fontSize: "30px" }} />
    </div>
  );
};

const Feedback = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="feedback-container">
      <div className="feedback-slider">
        <Slider {...settings} nextArrow={<NextBtn />} prevArrow={<PrevBtn />}>
          <Card />
          <Card />
          <Card />
          <Card />
        </Slider>
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingBottom: "10px",
      }}
    >
      <img
        src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-user-vector-avatar-png-image_4830521.jpg"
        alt="avatar-img"
        className="avatar"
      />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "20px",
        }}
      >
        <AiFillStar size={30} color="var(--primary-color)" />
        <AiFillStar size={30} color="var(--primary-color)" />
        <AiFillStar size={30} color="var(--primary-color)" />
        <AiFillStar size={30} color="var(--primary-color)" />
        <AiFillStar size={30} color="var(--primary-color)" />
      </div>
      <p className="feedback">
        I can create multiple menus and use them based on seasons or special
        occasion like mother’s day. Doing something similar with paper menus
        would be time and money consuming.
      </p>
      <p
        style={{
          fontSize: "1.6rem",
          fontWeight: "bold",
          color: "grey",
        }}
      >
        <span
          style={{
            fontSize: "1.6rem",
            fontWeight: "bold",
            color: "var(--primary-color)",
          }}
        >
          Krishna Da,{" "}
        </span>
        XYZ
      </p>
    </div>
  );
};

export default Feedback;
