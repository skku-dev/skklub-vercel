import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./card.css";

/**
 * Primary UI component for user interaction
 */
export const Card = ({ title, category, color, like, hover, ...props }) => {
  return (
    <div className={[hover ? "withImg" : "noImg", "wrap"].join(" ")} {...props}>
      <div className="title" style={color && { color }}>
        {title}
      </div>
      <div className="cardBottom">
        <div>{category}</div>
        <button className={like ? "redHeartButton" : "grayHeartButton"}>
          <FavoriteIcon />
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * name of the club
   */
  title: PropTypes.string.isRequired,
  /**
   * categoty of the club
   */
  category: PropTypes.string.isRequired,
  /**
   * color of the title
   */
  color: PropTypes.oneOf(["#FC7B95", "#FFCE50", "#80A4FF"]),
  /**
   * History of user liked
   */
  like: PropTypes.bool,
  /**
   * onMouseOver
   */
  hover: PropTypes.bool,
  /**
   * Optional heart button click handler
   */
  onClick: PropTypes.func,
};

Card.defaultProps = {
  title: "성균 서도회",
  category: "평면예술 / 서예",
  color: "#80A4FF",
  like: false,
  onClick: undefined,
  hover: false,
};
