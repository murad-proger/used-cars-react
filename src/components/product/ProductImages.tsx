import React from "react";

type ProductImagesProps = {
  images: string[];
};

export const ProductImages = ({ images }: ProductImagesProps) => {
  const [mainImage, setMainImage] = React.useState(images[0])

  return (
    <span className="img_block">
      <img src="img/icons/lupa.png" className="magnifier" alt="" />
      <span className="mini_images">
        {images.map((img, index) => {
          return (
            <span key={index} onClick={()=>setMainImage(images[index])} className={`img ${images[index] === mainImage ? "active" : ""}`}>
              <img src={img} alt="" />
            </span>
          );
        })}
      </span>
      <span className="main_img">
        <img src={mainImage} alt="" />
      </span>
    </span>
  );
};
