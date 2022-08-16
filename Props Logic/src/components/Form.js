import React from "react";
import Button from "react-bootstrap/Button";

function Form({ children, name, surname }) {
  return (
    <div>
      <Button variant="primary" size="lg">
        Large button
      </Button>
      <h1>
        {" "}
        {name} {surname} {children}
      </h1>
    </div>
  );
}

export default Form;
