import React from "react";
import { v4 as uuidv4 } from "uuid";
import Country from "./Country";

export default function CountryLoad(props) {
  return (
    <>
      <div className="row g-3">
        {props.countryLoad.map((country) => {
          const newCountry = { country, id: uuidv4() };
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
