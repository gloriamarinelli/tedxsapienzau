import React from "react";
import "../../resources/styles/blogstyle.css";
import { Link } from "react-router-dom";

export default function BlogCard({
  id,
  titolo,  
  image,
  data
 }) {
  return (
    <div className="container">
      <div className="row no-gutters">
        <div className="col-xl-6 col-12 mb-5 mb-xl-0">
          <div className="media media-news">
            <div className="media-img">
              <img
                src={`data:image/*;base64,${image}`}
                width="400"
                height="280"
                alt={titolo}
              />
            </div>
            <div className="media-body">
              <span className="media-date">{data}</span>
              <h5 className="mt-3">{titolo}</h5>
              <Link className="link" to={`/blog/${id}`}>
              <button className="button">View More</button>       
              </Link>    
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
