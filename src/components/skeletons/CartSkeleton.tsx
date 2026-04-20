import ContentLoader from "react-content-loader"

export const CartSkeleton = () => {
  return (
    <main className="cart_page">
      <div className="container">
        <div className="top">
          <h1>
            <ContentLoader 
              speed={2}
              width={175}
              height={70}
              viewBox="0 0 175 70"
              backgroundColor="#dbdbdbff"
              foregroundColor="#fff"
            >
              <rect x="0" y="30" rx="7" ry="7" width="175" height="40" />
            </ContentLoader>
          </h1>
        </div>
        <div style={{marginTop: '20px'}}>
          <ContentLoader 
            speed={2}
            width={1240}
            height={180}
            viewBox="0 0 1240 180"
            backgroundColor="#dbdbdbff"
            foregroundColor="#fff"
          >
            <rect x="0" y="0" rx="7" ry="7" width="1240" height="180" />
          </ContentLoader>
        </div>
        <div style={{marginTop: '20px'}}>
          <ContentLoader 
            speed={2}
            width={1240}
            height={180}
            viewBox="0 0 1240 180"
            backgroundColor="#dbdbdbff"
            foregroundColor="#fff"
          >
            <rect x="0" y="0" rx="7" ry="7" width="1240" height="180" />
          </ContentLoader>
        </div>
        <div style={{marginTop: '20px'}}>
          <ContentLoader 
            speed={2}
            width={1240}
            height={180}
            viewBox="0 0 1240 180"
            backgroundColor="#dbdbdbff"
            foregroundColor="#fff"
          >
            <rect x="0" y="0" rx="7" ry="7" width="1240" height="180" />
          </ContentLoader>
        </div>
      </div>
    </main>
  )
}
