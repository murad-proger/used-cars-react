import ContentLoader from "react-content-loader"

export const HomeSkeleton = () => {
  return (
    <main className="index">
      <div className="container">
        <ContentLoader 
          speed={2}
          width={1240}
          height={900}
          viewBox="0 0 1240 900"
          backgroundColor="#c2c2c2ff"
          foregroundColor="#fff"
        >
          <rect x="0" y="30" rx="5" ry="7" width="270" height="370" /> 
          <rect x="3" y="430" rx="5" ry="7" width="269" height="190" /> 
          <rect x="320" y="80" rx="5" ry="7" width="450" height="180" /> 
          <rect x="790" y="80" rx="5" ry="7" width="450" height="180" /> 
          <rect x="320" y="314" rx="5" ry="7" width="920" height="240" /> 
          <rect x="324" y="12" rx="5" ry="7" width="150" height="40" /> 
          <rect x="320" y="600" rx="7" ry="7" width="300" height="40" /> 
          <rect x="321" y="670" rx="7" ry="7" width="285" height="316" /> 
          <rect x="625" y="670" rx="7" ry="7" width="285" height="316" /> 
          <rect x="930" y="670" rx="7" ry="7" width="285" height="316" />
        </ContentLoader>
      </div>
    </main>
  )
}
