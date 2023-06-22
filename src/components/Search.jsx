import React, { useEffect, useState } from "react";

export default function Search(props) {
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    setSearchText(e.target.value);
  };

  useEffect(() => {
    props.onSearch(searchText);
  }, [searchText]);

  return (
    <div>
      <input
        type="search"
        placeholder="Write your country ..."
        className="form-control text-capitalize"
        style={{ boxShadow: "none" }}
        value={searchText}
        onChange={handleChange}
      />
    </div>
  );
}
