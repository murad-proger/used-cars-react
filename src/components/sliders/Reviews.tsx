import React from "react";
import Slider from "react-slick";

import { ReviewsCard} from "../";
import {PrevArrow} from "./PrevArrow"
import {NextArrow} from "./NextArrow"

export function Reviews() {

  const settings = {
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    infinite: true,
    dots: true,
    responsive: [{
        breakpoint: 1281,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
        <ReviewsCard
            path={'/'}
            img={'img/reviews.png'}
            name={'Анатолий'}
            date={'12.02.2020'}
            comment={'Делал полную замену в АКПП по вполне умеренной цене. До этого на неоф. СТО предлагали только частичную. Приехал на оговоренное время, оставил машину, через часа полтора пришла смс, что можно забирать.'}
        />
        <ReviewsCard
            path={'/'}
            img={'img/reviews.png'}
            name={'Анатолий'}
            date={'12.02.2020'}
            comment={'Делал полную замену в АКПП по вполне умеренной цене. До этого на неоф. СТО предлагали только частичную. Приехал на оговоренное время, оставил машину, через часа полтора пришла смс, что можно забирать.'}
        />
        <ReviewsCard
            path={'/'}
            img={'img/reviews.png'}
            name={'Анатолий'}
            date={'12.02.2020'}
            comment={'Делал полную замену в АКПП по вполне умеренной цене. До этого на неоф. СТО предлагали только частичную. Приехал на оговоренное время, оставил машину, через часа полтора пришла смс, что можно забирать.'}
        />
    </Slider>
  );
}
