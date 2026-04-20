import React from "react";

type BannerProps = {
  img: string
}
export const Banner = ({img}:BannerProps) => {
  return (
    <div
      className="banner"
      style={{ backgroundImage:  `url(${img})` }}
    >
      <div className="date_banner">27 марта - 31 августа</div>
    </div>
  );
};
