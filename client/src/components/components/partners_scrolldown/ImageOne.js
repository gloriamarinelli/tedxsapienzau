import { Parallax } from "react-parallax";
import wallpaper from "./img/volunteers.webp";

const ImageOne = () => (
  <Parallax
    className="image"
    blur={0}
    color="#191919"
    bgImage={wallpaper}
    strength={500}
    bgImageStyle={{
      minHeight: "100vh",
      filter: "brightness(50%)",
    }}
  >
    <div className="content ct-right">
      <div className="text-div">
        <h3 className="img-title">TEDx, molto più che un evento.</h3>
        <p className="img-txt">
          Realizzare un TEDx è un lavoro di squadra. L’organizzazione avviene in
          sinergia con i nostri partner.
        </p>
        <p className="img-link">
          <a
            href="https://www.tedxsapienzau.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Scopri di più
          </a>
        </p>
      </div>
    </div>
  </Parallax>
);

export default ImageOne;
