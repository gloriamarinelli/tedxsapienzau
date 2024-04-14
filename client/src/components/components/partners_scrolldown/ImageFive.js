import { Parallax } from "react-parallax";
import wallpaper from "./img/6.png";

const ImageFive = () => (
  <Parallax
    className="image"
    blur={0}
    color="#191919"
    bgImage={wallpaper}
    strength={500}
    bgImageStyle={{
      minHeight: "100vh",
    }}
  >
    <div className="content ct-left">
      <div className="text-div">
        <h3 className="img-title">2024-2023-2022</h3>
        <p className="img-txt">Loghi</p>
        <p className="img-txt" style={{ marginTop: "50%" }}>
          Lavoriamo Insieme:
          <ul className="work-together-list" style={{ listStyleType: "none" }}>
            <li>
              <a
                href="https://www.tedxsapienzau.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Scrivici
              </a>
            </li>
            <li>
              <a
                href="https://www.tedxsapienzau.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prenota una call
              </a>
            </li>
          </ul>
        </p>
      </div>
    </div>
  </Parallax>
);

export default ImageFive;
