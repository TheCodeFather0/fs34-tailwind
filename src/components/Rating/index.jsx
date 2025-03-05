import React from "react";

const RatingStar = ({ filled }) => {
  return (
    <span
      className={`star ${filled ? "filled" : "empty"}`}
      style={{
        fontSize: "30px",
        marginRight: "5px",
        color: filled ? "gold" : "black",
      }}
    >
      &#9733;
    </span>
  );
};

const Rating = ({ totalStars = 5, rating = 3, ratingId = "" }) => {
  return (
    <div>
      {Array.from({ length: totalStars }, (_, index) => (
        <RatingStar key={index} filled={index < rating} />
      ))}

      <div style={{ fontSize: "16px", color: "gray" }}>
        Reytinq: {rating} / {totalStars}
      </div>
    </div>
  );
};

export default Rating;
