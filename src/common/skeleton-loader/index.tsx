import ContentLoader from "react-content-loader";

const SkeletonLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={860}
      viewBox="0 0 400 860"
      backgroundColor="#e0e0e0"
      foregroundColor="#ecebeb"
    >
      <circle cx="31" cy="31" r="15" />
      <rect x="58" y="18" rx="2" ry="2" width="140" height="10" />
      <rect x="58" y="34" rx="2" ry="2" width="140" height="10" />
      <rect x="-106" y="61" rx="2" ry="2" width="1164" height="590" />
    </ContentLoader>
  );
};

export default SkeletonLoader;
