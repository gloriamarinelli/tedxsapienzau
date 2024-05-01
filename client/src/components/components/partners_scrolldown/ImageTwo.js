import { Parallax } from "react-parallax";
import wallpaper from "./img/3.webp";

const ImageTwo = () => (
  <Parallax
    id="parallax-box-2"
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
        <h3 className="img-title">Perché collaborare?</h3>
        <h4 id="imp-txt-2" className="img-txt">
          Uniti per un obiettivo
        </h4>
        <p className="img-txt-2">
          Circa 3 anni fa, dallo stimolo di sei studenti si è deciso di portare
          questo format internazionale nella nostra Università. <br></br>
          Ora siamo più di 110 volontari.
        </p>
        <p className="img-txt-2">
          Sapienza è l’Università più grande d’Europa, con più di 120 mila
          studenti iscritti ed il nostro obiettivo è <br></br>
          <span id="imp-txt-4">dare voce alle idee</span> di valore della nostra
          comunità accademica.
        </p>
      </div>
    </div>
  </Parallax>
);

export default ImageTwo;
