import React from "react";

import useCountry from "./../hooks/useCountry";
import CountryLoad from "./CountryLoad";
import Search from "./Search";

export default function Countries() {
  const { loading, error, countries, filterCountries, setFilterCountries } =
    useCountry("https://restcountries.com/v3.1/all");

  const handleRemoveCountry = (name) => {
    const filter = filterCountries.filter(
      (country) => country.name.common !== name
    );
    setFilterCountries(filter);
  };

  const handleSearch = (searchValue) => {
    let value = searchValue.toLowerCase();
    const newCountry = countries.filter((country) => {
      const countryName = country.name.common.toLowerCase();
      return countryName.startsWith(value);
    });
    setFilterCountries(newCountry);
  };

  return (
    <div>
      <button disabled className=" btn btn-success mb-2">
        All Country: {countries.length}
      </button>
      <br />
      <br />
      <div className="row">
        <div className="col-md-10 m-auto">
          <Search onSearch={handleSearch} />
        </div>
      </div>
      <br />
      <br />
      {loading && <p>Loadding...</p>}
      {error && <p>Something is Wrong</p>}
      {countries && (
        <CountryLoad
          countryLoad={filterCountries}
          onRemoveCountry={handleRemoveCountry}
        />
      )}
    </div>
  );
}
