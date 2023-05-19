/* eslint-disable react/no-unknown-property */
import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React from "react";
import PropTypes from "prop-types";

export default function ClubCard({
  title,
  category,
  color,
  like,
  hover,
  ...props
}) {
  return (
    <div className={[hover ? "withImg" : "noImg", "wrap"].join(" ")} {...props}>
      <div className="title" style={color && { color }}>
        {title}
      </div>
      <div className="cardBottom">
        <div>{category}</div>
        {/* <button className={like ? "redHeartButton" : "grayHeartButton"}> */}
        <FavoriteIcon />
        {/* heart */}
        {/* </button> */}
      </div>
      <style jsx>{`
        .wrap {
          width: 276px;
          height: 276px;
          border-radius: 16px;
          padding: 21px;
          word-break: keep-all;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .noImg {
          background-color: #262626;
        }
        .withImg {
          background: url("/cardImage.png");
        }

        .title {
          font-size: 60px;
          line-height: 60px;
          font-weight: 700;
        }

        .cardBottom {
          display: flex;
          justify-content: space-between;
        }
        .redHeartButton {
          color: #ff0000;
        }
      `}</style>
    </div>
  );
}

ClubCard.propTypes = {
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

ClubCard.defaultProps = {
  title: "성균 서도회",
  category: "평면예술 / 서예",
  color: "#80A4FF",
  like: false,
  onClick: undefined,
  hover: false,
};
