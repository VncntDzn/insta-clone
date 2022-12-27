import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import HappyPic from "../../assets/happy.png";
import LikePic from "../../assets/like.png";
const Poster = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "orange",
        borderRadius: "20px",
      }}
    >
      <Carousel
        showIndicators={false}
        showArrows={false}
        showThumbs={false}
        showStatus={false}
        autoPlay
        infiniteLoop
      >
        <div>
          <Image
            quality={100}
            alt="Like"
            src={LikePic}
            height={600}
            width={600}
          />
        </div>
        <div>
          <Image
            quality={100}
            alt="Happy"
            src={HappyPic}
            height={600}
            width={600}
          />
        </div>
        {/*   <div>
        <Image
          quality={100}
          alt="Selfie"
          src={Selfie}
          height={600}
          width={600}
        />
      </div> */}
      </Carousel>
    </div>
  );
};

export default Poster;
