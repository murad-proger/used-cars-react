import ContentLoader from "react-content-loader"

export const ProductCardSkeleton = () => {
  return (
    <ContentLoader 
      speed={2}
      width={285}
      height={280}
      viewBox="0 0 285 280"
      backgroundColor="#dbdbdbff"
      foregroundColor="#fff"
    >
      <rect x="0" y="0" rx="11" ry="11" width="285" height="280" />
    </ContentLoader>
    )
}