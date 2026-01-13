import React from "react";

const Error = ({ message }) => {
  return (
    <div>
      <h2>Üzgünüz bir sorun oluştu.</h2>
      <h2>{message}</h2>
    </div>
  );
};

export default Error;
