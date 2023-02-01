import React from "react";
import "../../resources/styles/blogstyle.css";

export default function Blog() {
  return (
    <>
      <div
        className="header-blog"
        style={{
          textAlign: "left",
          color: "white",
          display: "grid",
          clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
          height: "50vh",
        }}
      >
        <h1
          className="font-weight-bold mt-5"
          style={{
            fontSize: "70px",
            fontWeight: "bold",
            marginLeft: "30px",
          }}
        >
          IDEAS WORTH SPREADING
        </h1>
        <p
          style={{
            fontSize: "50px",
            fontStyle: "italic",
            marginLeft: "30px",
          }}
        >
          Le{" "}
          <strong
            style={{
              color: "#EB0028",
            }}
          >
            idee
          </strong>{" "}
          per cambiare il mondo
        </p>
      </div>

      <div class="container">
        <div class="row">
          <div class="col-md-4">          
           
            <div class="profile-card-2">
              <img
                src="http://envato.jayasankarkr.in/code/profile/assets/img/profile-2.jpg"
                class="img img-responsive"
              />
              <div class="profile-name">JOHN DOE</div>
              <div class="profile-username">@johndoesurname</div>
              <div class="profile-icons">
                <a href="#">
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                </a>
                <a href="#">
                  <i class="fa fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
