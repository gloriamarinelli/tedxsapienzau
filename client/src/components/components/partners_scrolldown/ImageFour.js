import { Parallax } from "react-parallax";
import wallpaper from "./img/5.webp";
import CountUp from "react-countup";

const ImageFour = () => (
  <Parallax
    id="parallax-box-4"
    className="image"
    blur={0}
    color="#191919"
    bgImage={wallpaper}
    strength={500}
    bgImageStyle={{
      minHeight: "100vh",
    }}
  >
    <div className="content ct-right">
      <div className="text-div">
        <h3 className="img-title">In numeri</h3>
        <p className="img-txt-2">
          2 Edizioni, 2 Awards, 10 Workshops, 3 Eventi indipendenti.
          <ul className="numbers-list info-list">
            <li className="info-el">
              <h3 className="info-number">
                +
                <CountUp end={1500} duration={2} useEasing={false} />
              </h3>{" "}
              persone coinvolte negli eventi
            </li>
            <li className="info-el">
              <h3 className="info-number">
                +
                <CountUp end={200000} duration={2} useEasing={false} />
              </h3>{" "}
              visualizzazioni su YouTube
            </li>
            <li className="info-el">
              <h3 className="info-number">
                +
                <CountUp end={50} duration={2} useEasing={false} />
              </h3>{" "}
              partner a supporto del nostro evento
            </li>
            <li className="info-el">
              <h3 className="info-number">
                +
                <CountUp end={300} duration={2} useEasing={false} />
              </h3>{" "}
              volontari passati di qui
            </li>
          </ul>
        </p>
      </div>
    </div>
  </Parallax>
);

export default ImageFour;
