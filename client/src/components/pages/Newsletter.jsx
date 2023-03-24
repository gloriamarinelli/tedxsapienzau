import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { useOutletContext } from "react-router";
import global from "../../resources/global.json";
import TableNewsletter from "../components/TableNewsletter";

const Newsletter = () => {
  const [newsletter, setNewsletter] = useState([]);
  const navigate = useNavigate();
  const state = useLocation().state;
  const { currentUser, currentToken, logout } = useContext(AuthContext);
 
  useEffect(() => {
    axios
      .get(global.CONNECTION.ENDPOINT + "newsletter")
      .then((res, err) => {
        setNewsletter(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div
        className="header-write"
        style={{
          backgroundColor: "RGBA(25, 135, 84,0.5)",
          padding: "10px",
          textAlign: "center",
          color: "black",
          display: "grid",
          height: "20vh",
          marginTop: global.UTILS.SOCIAL_NAV_HEIGHT,
        }}
      >
        <h1
          className="font-weight-bold mt-5"
          style={{
            fontSize: "40px",
            marginLeft: "30px",
          }}
        >
          INSCRITTI ALLA NEWSLETTER
        </h1>
      </div>

      {newsletter.map((newsletter) => {
        const { id, email, time } = newsletter;
        return <TableNewsletter key={id} id={id} email={email} time={time} />;
      })}
    </>
  );
};

export default Newsletter;
