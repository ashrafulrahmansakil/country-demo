import React from "react";

export default function Country(props) {
  const {
    name,
    flags,
    capital,
    population,
    region,
    subregion,
    startOfWeek,
    continents,
  } = props.country;

  const handleRemoveCountry = (name) => {
    props.onRemoveCountry(name);
  };

  return (
    <>
      <div className="col-lg-3 col-md-4 col-sm-6">
        <div
          className="card border-danger text-capitalize"
          style={{ height: "100%" }}>
          <img
            src={flags.png}
            alt={name.common}
            style={{ height: "16rem" }}
            className="card-img-top"
          />
          <div className="card-body bg-dark text-white">
            <h5>country : {name.common} </h5>
            <p>region : {region}</p>
            <p>continents : {continents}</p>
            <p>sub-region : {subregion}</p>
            <p>population :{population} </p>
            <p>independent : {capital}</p>
            <p>Officials: {name.official}</p>
            <p>start of Week: {startOfWeek}</p>

            {/* button with remove */}
            <button
              className="btn btn-danger"
              onClick={() => {
                handleRemoveCountry(name.common);
              }}>
              Remove country
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
