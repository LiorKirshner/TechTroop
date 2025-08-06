import { useState } from "react";

const Register = ({ reservations }) => {
  return (
    <div id="register">
      <div>You cannot reserve during these times:</div>
      {reservations.map((reg, index) => (
        <div key={index}>
          {reg.day} @ {reg.time}
        </div>
      ))}
    </div>
  );
};

export default Register;
