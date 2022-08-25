import React, { useEffect, useState } from "react";

function Clock() {
  const [clock, setClock] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    });
  });
  return <div>{clock}</div>;
}

export default Clock;
