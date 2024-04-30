import { Parallax } from "react-parallax";
import wallpaper from "./img/2.webp";

const ImageOne = () => (
  <Parallax
    id="parallax-box-1"
    className="image"
    blur={0}
    color="#191919"
    bgImage={wallpaper}
    strength={300}
    bgImageStyle={{
      minHeight: "100vh",
    }}
  >
    <div className="content ct-right">
      <div className="text-div">
        <h3 className="img-title">TEDx, molto più che un evento.</h3>
        <p className="img-txt">
          Realizzare un TEDx è un lavoro di squadra. Per questo motivo
          collaboriamo in sinergia con i nostri partner.
        </p>
      </div>
    </div>
  </Parallax>
);

export default ImageOne;
