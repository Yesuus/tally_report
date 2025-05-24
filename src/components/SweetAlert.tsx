import React from "react";
import Swal from "sweetalert2";
type alertData = {
  title: string;
  message: string;
  icon: string;
  buttonText?: string;
};
const SweetAlert = (params: alertData) => {
  const { title, message, icon, buttonText } = params;
  //   const showAlert = () => {
  Swal.fire({
    title: title || "Alert",
    text: message || "This is a message",
    icon: icon || "info",
    confirmButtonText: buttonText || "OK",
  });
  //   };
  //   return <button onClick={showAlert}>Show Alert</button>;
};

export default SweetAlert;
