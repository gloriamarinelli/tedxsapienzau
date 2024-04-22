import { Parallax } from "react-parallax";
import wallpaper from "./img/3.png";
const ImageTwo = () => (
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
        <h3 className="img-title">Perché collaborare?</h3>
        <h4 className="img-txt">Uniti per un obiettivo</h4>
        <p className="img-txt-2">
          Circa 3 anni fa, dallo stimolo di sei studenti si è deciso di portare
          questo format internazionale nella nostra università Sapienza. La
          nostra è infatti l’Università più grande d’Europa, con più di 120 mila
          studenti iscritti.
        </p>
        <p className="img-txt-2">
          Il nostro obiettivo è dare voce alle idee di valore che la nostra
          comunità accademica vuole far emergere.
        </p>
        <p className="img-txt-2">Ora siamo in più di 120 volontari.</p>
      </div>
    </div>
  </Parallax>
);

export default ImageTwo;
