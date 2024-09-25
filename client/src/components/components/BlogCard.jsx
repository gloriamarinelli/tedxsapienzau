import React, { useContext, useState, useEffect } from "react";
import "../../resources/styles/blogstyle.css";
import format from "date-fns/format";
import { it } from "date-fns/locale";
import { AuthContext } from "../context/authContext";

export default function BlogCard({ id, titolo, image, data }) {
  const [isAdmin, setIsAdmin] = useState(false);
  const { isUserLoggedIn, logout } = useContext(AuthContext);

  useEffect(() => {
    if (
      localStorage.getItem("token") === null ||
      localStorage.getItem("token") === undefined ||
      localStorage.getItem("token") === "null"
    ) {
      return;
    } else {
      const checkIsUserLoggedIn = async () => {
        const status = await isUserLoggedIn(localStorage.getItem("token"));
        return status;
      };

      let status = checkIsUserLoggedIn().catch((err) => console.log(err));
      status.then((res) => {
        if (res.status === 200) {
          console.log(res);
          setIsAdmin(true);
        } else {
          console.log(res);
          logout();
        }
      });
    }
  });

  return (
    <>
      <div className="blog-card">
        <div className="meta">
          <div
            className="photo"
            style={{
              background: `url(data:image/*;base64,${image ?? ""})`,
              width: "350px",
              height: "250px",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            alt={titolo}
          ></div>
        </div>
        <div className="description">
          <h4
            className="date"
            style={{
              fontFamily: "Fira Sans Extra Condensed, sans-serif",
              textTransform: "capitalize",
              color: "#FFF",
            }}
          >
            <span className="media-date">
              {data ? format(new Date(data), "d MMM YYY", { locale: it }) : ""}
            </span>
          </h4>
          <a className="underline" href={`/blog/${id}`}>
            <h4
              style={{
                fontFamily: "Fira Sans Extra Condensed, sans-serif",
                textTransform: "uppercase",
                color: "#FFF",
              }}
            >
              {titolo}
            </h4>
          </a>

          {isAdmin && (
            <p className="link">
              <a className="link" href={`/`}>
                <button className="button">Modifica</button>
              </a>
            </p>
          )}
        </div>
      </div>
    </>
  );
}
