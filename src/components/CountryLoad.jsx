import React from "react";
import { v4 as uuid } from "uuid";
import Country from "./Country";

export default function CountryLoad(props) {
  return (
    <>
      <div className="row g-3">
        {props.countryLoad.map((country) => {
          const newCountry = { country, id: uuid() };
          return (
            <Country
              {...newCountry}
              key={newCountry.id}
              onRemoveCountry={props.onRemoveCountry}
            />
          );
        })}
      </div>
    </>
  );
}
