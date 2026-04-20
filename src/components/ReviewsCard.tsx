import React from "react";
import { Link } from "react-router-dom";

type ReviewsCardProps = {
  path: string;
  img: string;
  name: string;
  date: string;
  comment: string;
}

export const ReviewsCard = ({path, img, name, date, comment}:ReviewsCardProps) => {
  return (
    <div className="item">
      <div className="man">
        <Link to={path}>
          <span className="img">
            <img src={img} alt="" />
          </span>
          <span className="info">
            <span className="name">{name}</span>
            <br />
            <span className="date">{date}</span>
          </span>
        </Link>
      </div>
      <p className="comment">
        {comment}
      </p>
    </div>
  );
};
