import React from "react";
export default function Card(props) {
  return (
    <div className="div-for-hr">
      <div className="card">
        <div className="card-photo">
          <img src={props.imageUrl} alt="travel-place" />{" "}
        </div>
        <div className="card-info">
          <p>
            <img src="/images/Fill 220.png" alt="path-pic" className="path" />
            <span className="country">{props.location}</span>
            <a
              href={props.googleMapsUrl}
              className="a-google-maps"
              target="_blank"
              rel="noreferrer"
            >
              View on Google Maps
            </a>
          </p>
          <h1>{props.title}</h1>
          <p>
            <b>{`${props.startDate} - ${props.endDate}`}</b>
          </p>
          <p>{props.description}</p>
        </div>
      </div>
      <hr />
    </div>
  );
}
