import ContentLoader from "react-content-loader";

export const ProductSkeleton = () => {
  return (
    <main className="product_page">
      <div className="container">
        <h1>
          <ContentLoader
            speed={2}
            width={500}
            height={70}
            viewBox="0 0 500 70"
            backgroundColor="#dbdbdbff"
            foregroundColor="#fff"
          >
            <rect x="0" y="30" rx="7" ry="7" width="500" height="40" />
          </ContentLoader>
        </h1>
        <div className="wrapper">
          <div className="inner1">
            <div className="img_block">
              <ContentLoader
                speed={2}
                width={590}
                height={400}
                viewBox="0 0 590 400"
                backgroundColor="#dbdbdbff"
                foregroundColor="#fff"
              >
                <rect x="0" y="0" rx="5" ry="5" width="84" height="84" />
                <rect x="0" y="91" rx="5" ry="5" width="84" height="84" />
                <rect x="0" y="184" rx="5" ry="5" width="84" height="84" />
                <rect x="0" y="276" rx="5" ry="5" width="84" height="84" />
                <rect x="99" y="0" rx="5" ry="5" width="488" height="400" />
              </ContentLoader>
            </div>
            <div className="info1">
              <div style={{ marginBottom: "10px" }}>
                <ContentLoader
                  speed={2}
                  width={610}
                  height={145}
                  viewBox="0 0 610 145"
                  backgroundColor="#dbdbdbff"
                  foregroundColor="#fff"
                >
                  <rect x="0" y="0" rx="5" ry="5" width="610" height="145" />
                </ContentLoader>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <ContentLoader
                  speed={2}
                  width={610}
                  height={145}
                  viewBox="0 0 610 145"
                  backgroundColor="#dbdbdbff"
                  foregroundColor="#fff"
                >
                  <rect x="0" y="0" rx="5" ry="5" width="610" height="145" />
                </ContentLoader>
              </div>
              <div style={{ marginBottom: "10px" }}>
                <ContentLoader
                  speed={2}
                  width={610}
                  height={145}
                  viewBox="0 0 610 145"
                  backgroundColor="#dbdbdbff"
                  foregroundColor="#fff"
                >
                  <rect x="0" y="0" rx="5" ry="5" width="610" height="145" />
                </ContentLoader>
              </div>
            </div>
          </div>
          <div className="inner2">
            <div className="info2">
                <ContentLoader 
                  speed={2}
                  width={318}
                  height={370}
                  viewBox="0 0 318 370"
                  backgroundColor="#dbdbdbff"
                  foregroundColor="#ffff"
                >
                  <rect x="0" y="0" rx="6" ry="6" width="220" height="30" /> 
                  <rect x="52" y="51" rx="0" ry="0" width="1" height="2" /> 
                  <rect x="0" y="73" rx="5" ry="5" width="90" height="16" /> 
                  <rect x="220" y="73" rx="5" ry="5" width="90" height="16" /> 
                  <rect x="52" y="84" rx="0" ry="0" width="1" height="2" /> 
                  <rect x="0" y="106" rx="5" ry="5" width="90" height="16" /> 
                  <rect x="220" y="106" rx="5" ry="5" width="90" height="16" /> 
                  <rect x="53" y="119" rx="0" ry="0" width="1" height="2" /> 
                  <rect x="1" y="141" rx="5" ry="5" width="90" height="16" /> 
                  <rect x="221" y="141" rx="5" ry="5" width="90" height="16" /> 
                  <rect x="53" y="152" rx="0" ry="0" width="1" height="2" /> 
                  <rect x="1" y="174" rx="5" ry="5" width="90" height="16" /> 
                  <rect x="221" y="174" rx="5" ry="5" width="90" height="16" /> 
                  <rect x="1" y="205" rx="5" ry="5" width="90" height="16" /> 
                  <rect x="221" y="205" rx="5" ry="5" width="90" height="16" /> 
                  <rect x="53" y="216" rx="0" ry="0" width="1" height="2" /> 
                  <rect x="1" y="238" rx="5" ry="5" width="90" height="16" /> 
                  <rect x="221" y="238" rx="5" ry="5" width="90" height="16" /> 
                  <rect x="54" y="251" rx="0" ry="0" width="1" height="2" /> 
                  <rect x="2" y="273" rx="5" ry="5" width="90" height="16" /> 
                  <rect x="222" y="273" rx="5" ry="5" width="90" height="16" /> 
                  <rect x="54" y="284" rx="0" ry="0" width="1" height="2" /> 
                  <rect x="2" y="306" rx="5" ry="5" width="90" height="16" /> 
                  <rect x="222" y="306" rx="5" ry="5" width="90" height="16" />
                </ContentLoader>
            </div>
            <div className="info3">
                <ContentLoader 
                  speed={2}
                  width={610}
                  height={300}
                  viewBox="0 0 610 300"
                  backgroundColor="#dbdbdbff"
                  foregroundColor="#fff"
                >
                  <rect x="0" y="0" rx="6" ry="6" width="220" height="30" /> 
                  <rect x="0" y="61" rx="6" ry="6" width="610" height="210" />
                </ContentLoader>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
