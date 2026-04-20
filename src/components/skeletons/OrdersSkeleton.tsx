import ContentLoader from "react-content-loader"

export const OrdersSkeleton = () => {
  return (
    <main className="orders-page">
      <section>
        <div className="container">
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
          <div style={{width: '100%', height: '525px'}}>
            <ContentLoader 
              speed={2}
              width={1240}
              height={525}
              viewBox="0 0 1240 525"
              backgroundColor="#dbdbdbff"
              foregroundColor="#fff"
            >
              <rect x="0" y="0" rx="10" ry="10" width="1240" height="525" />
            </ContentLoader>
          </div>
        </div>
      </section>
    </main>
  )
}
