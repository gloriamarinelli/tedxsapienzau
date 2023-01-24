import Image from "../images/Get involved in TEDxSapienzaU.png";
import Image1 from "../images/Work with TEDxSapienzaU.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Join() {
  return (
    <>
      <div
        className="gradient-background"
        style={{
          backgroundColor: "red",
          textAlign: "left",
          display: "grid",
          height: "100",
          color: "#fff",
          clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
          height: "40vh",
          display: "grid",
          placeItems: "center",
        }}
      >
        <h1
          className="font-weight-bold mt-5 mb-5"
          style={{
            fontSize: "50px",
            fontWeight: "bold",
            fontFamily: "GothamBold",
          }}
        >
          Entra a far parte anche tu del team TedxSapienzaU!
        </h1>
      </div>

      <div className="container marketing">
        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h3>Sei uno studente interessato al progetto?</h3>
            <form>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Indirizzo email
                </label>
                <required>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                </required>
                <label for="exampleInputEmail1" class="form-label">
                  Nome
                </label>
                <required>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                </required>
                <label for="exampleInputEmail1" class="form-label">
                  Cognome
                </label>
                <required>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                </required>
                <label for="exampleInputEmail1" class="form-label">
                  Messaggio
                </label>
                <required>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                </required>
              </div>
              <button
                type="submit"
                class="btn"
                style={{
                  backgroundColor: "rgb(235, 0, 40)",
                  color: "white",
                }}
              >
                Invia
              </button>
            </form>
          </div>
          <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center">
          <LazyLoadImage
            src={Image}
            alt="Student"
            width="" height="100"
          />
          </div>
        </div>

        <hr className="featurette-divider"></hr>

        <div className="row featurette">
          <div className="col-md-7 order-md-2">
            <h3>Sei un'azienda e ti interessa collaborare e supportarci?</h3>
            <form>
              <div class="mb-10">
                <label for="exampleInputEmail1" class="form-label">
                  Indirizzo email
                </label>
                <required>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                </required>
                <label for="exampleInputEmail1" class="form-label">
                  Nome
                </label>
                <required>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                </required>
                <label for="exampleInputEmail1" class="form-label">
                  Telefono
                </label>
                <required>
                  <input
                    type="number"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                </required>
                <label for="exampleInputEmail1" class="form-label">
                  Messaggio
                </label>
                <required>
                  <input
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  ></input>
                </required>
              </div>

              <button type="submit" class="btn mt-3 mb-3"
              style={{
                backgroundColor: "rgb(235, 0, 40)",
                color: "white"
              }}>
                Invia
              </button>
            </form>
          </div>
          <div className="col-md-5 order-md-1 d-flex justify-content-center align-items-center mb-5">
          <LazyLoadImage
            src={Image1}
            alt="Work"
            width="" height="100"
          />
          </div>
        </div>
      </div>
    </>
  );
}
