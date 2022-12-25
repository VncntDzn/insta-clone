import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import LikePic from "../../assets/like.png";
import HappyPic from "../../assets/happy.png";
import Selfie from "../../assets/selfie.png";
import Image from "next/image";
const Poster = () => {
  return (
    <Carousel
      showIndicators={false}
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      autoPlay
      infiniteLoop
    >
      <div>
        <Image alt="Like Pic" src={LikePic} height={600} width={600} />
      </div>
      <div>
        <Image alt="Happy Pic" src={HappyPic} height={600} width={600} />
      </div>
      <div>
        <Image alt="Selfie" src={Selfie} height={600} width={600} />
      </div>
    </Carousel>
  );
};

export default Poster;
