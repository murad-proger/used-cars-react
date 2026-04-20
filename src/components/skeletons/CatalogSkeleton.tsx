import ContentLoader from "react-content-loader"
import { ProductCardSkeleton } from "./ProductCardSkeleton"

export const CatalogSkeleton = () => {
  return (
    <main className="catalog_page">
      <div className="container">
        <aside>
            <ContentLoader 
              speed={2}
              width={268}
              height={800}
              viewBox="0 0 268 800"
              backgroundColor="#dbdbdbff"
              foregroundColor="#fff"
            >
              <rect x="0" y="50" rx="6" ry="6" width="70" height="20" />
              <rect x="0" y="84" rx="7" ry="7" width="268" height="800" />
            </ContentLoader>
        </aside>
        <div className="content">
          <div className="products">
            <div className="top">
              <ContentLoader 
                speed={2}
                width={320}
                height={120}
                viewBox="0 0 320 120"
                backgroundColor="#dbdbdbff"
                foregroundColor="#fff"
              >
                <rect x="0" y="55" rx="5" ry="5" width="320" height="40" />
              </ContentLoader>
              <ContentLoader 
                speed={2}
                width={427}
                height={120}
                viewBox="0 0 427 120"
                backgroundColor="#dbdbdbff"
                foregroundColor="#fff"
              >
                <rect x="0" y="55" rx="5" ry="5" width="250" height="40" />
                <rect x="290" y="55" rx="5" ry="5" width="35" height="35" />
                <rect x="340" y="55" rx="5" ry="5" width="35" height="35" />
              </ContentLoader>
            </div>
            <div className="cards row">
              {[...Array(12)].map((_, index)=><ProductCardSkeleton key={index} />)}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
