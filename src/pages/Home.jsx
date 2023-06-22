import React from "react";
import Countries from "../components/Countries";

export default function Home() {
  return (
    <>
      <div className="container mt-4">
        <div>All Country</div>
        <div className="row">
          <Countries/>
        </div>
      </div>
    </>
  );
}
