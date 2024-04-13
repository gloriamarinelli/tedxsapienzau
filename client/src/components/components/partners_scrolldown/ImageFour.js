import { Parallax } from "react-parallax";
import wallpaper from "./img/header_blog23.webp";

const ImageFour = () => (
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
        <h3 className="img-title">In numeri</h3>
        <p className="img-txt-2">
          2 Edizioni, 2 Awards, 10 Workshops, 3 Eventi indipendenti.
          <ul className="info-list">
            <li>1500 persone coinvolte offline negli eventi</li>
            <li>200000 visualizzazioni su YouTube</li>
            <li>50 partner a supporto del nostro evento</li>
            <li>300 volontari in totale</li>
          </ul>
          <div className="feedbacks-container">
            <p>Feedback Azienda</p>
            <p className="statement">"Ci siamo trovati benissimo blablabla"</p>
            <p>Partecipante evento</p>
            <p className="statement">"Troppo bello blablabla"</p>
          </div>
          <div className="button-container">
            <p className="button-text">
              <button className="red-button">
                Scopri chi ci ha supportato
              </button>
            </p>
          </div>
        </p>
      </div>
    </div>
  </Parallax>
);

export default ImageFour;
