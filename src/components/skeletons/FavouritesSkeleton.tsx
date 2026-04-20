import ContentLoader from "react-content-loader"

import { ProductCardSkeleton } from "./ProductCardSkeleton"

export const FavouritesSkeleton = () => {
  return (
    <main className="favourites-page">
      <section>
        <div className="container">
          <h1 className="">
            <ContentLoader 
              speed={2}
              width={175}
              height={60}
              viewBox="0 0 175 60"
              backgroundColor="#dbdbdbff"
              foregroundColor="#fff"
            >
              <rect x="0" y="10" rx="7" ry="7" width="175" height="40" />
            </ContentLoader>
          </h1>
          <div className="cards">
            {[...Array(8)].map((_, index)=><ProductCardSkeleton key={index} />)}
          </div>
        </div>
      </section>
    </main>
  )
}
