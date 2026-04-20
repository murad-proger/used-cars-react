
import { Aside, Title, PopularGoods, Reviews, Banner } from "../components";


const Home = () => {
  return (
    <main className="index">
      <div className="container">
        <Aside />
        <div className="content">
          <Banner img={'img/banner.png'} />
          <div className="popular_goods">
            <Title>Популярные товары</Title>
            <div className="slider">
              <PopularGoods />
            </div>
          </div>
          <div className="reviews">
            <Title>Отзывы</Title>
            <div className="slider">
              <Reviews />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
