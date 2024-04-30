import { Parallax } from "react-parallax";
import wallpaper from "./img/4.webp";

const ImageThree = () => (
  <Parallax
    id="parallax-box-3"
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
      <div className="var-container">
        <div className="text-div">
          <h4 className="img-txt">L’innovazione è nelle nostre vene </h4>
          <p className="img-txt-2">
            Il format TEDx ci è concesso sotto licenza ufficiale da TED
            Foundation. Operiamo sotto i più elevati standard di qualità per
            garantire un’esperienza che sia all’altezza del nome che portiamo.
          </p>
          <p className="img-txt-2">
            Ci impegniamo a parlare di temi più rilevanti per la nostra società
            attraverso la voce degli Speaker. Vogliamo portare un impatto
            positivo alla nostra comunità.
          </p>
        </div>
        <div class="row-box-container list-column-div">
          <div className="ct-left">
            <div class="row-box">
              <h2>I nostri pilastri</h2>
              <ul className="partners-list">
                <li className="img-txt-2">Community</li>
                <li className="img-txt-2">Content marketing</li>
                <li className="img-txt-2">Employer branding</li>
              </ul>
            </div>
          </div>
          <div className="ct-right">
            <div class="row-box">
              <h2>Collabora con noi</h2>
              <ul className="partners-list">
                <li className="img-txt-2">Sponsor</li>
                <li className="img-txt-2">Partnership</li>
                <li className="img-txt-2">Media partner</li>
                <li className="img-txt-2">Community partner</li>
                <li className="img-txt-2">Patrocinio</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Parallax>
);

export default ImageThree;
