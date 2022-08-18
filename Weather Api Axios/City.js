import React from "react";

function City({ city }) {
  console.log(city);
  return (
    <div>
      <h1>{city.main.temp}</h1>
    </div>
  );
}

export default City;
