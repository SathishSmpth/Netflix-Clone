import React from "react";
import netflixSymbol from "../../logo/netflixSymbol.svg";
import { Link } from "react-router-dom";

const GenresCard = ({ cardContent }) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${cardContent.poster_path}`;
  const detailUrl = `/movies/${cardContent.id}`;

  return (
    <div className="card">
      <div className="card-image-container">
        <img className="netflixLogo" src={netflixSymbol} alt="" />
        <img
          className="card-image"
          src={posterUrl}
          alt={cardContent.original_title}
          onError={(e) => {
            e.target.src = require("../../icons/defaultImage.jpg");
          }}
        />
      </div>
      <div className="card-body">
        <div className="card-title">
          <b>{cardContent.original_title}</b>
        </div>
        <Link to={detailUrl} className="detailsLink">
          <button className="detailsButton">
            <div className="detailsLink"><b>Watch and More Details</b></div>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default GenresCard;
