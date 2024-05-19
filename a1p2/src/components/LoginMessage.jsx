// src/components/LoginMessage.jsx

import React from "react";

function LoginMessage({ isLoggedIn }) {
  return <div>{/* complete the missing code */
  isLoggedIn ? <p>Welcome Back</p> : <p>Please log in.</p>
  }</div>;
}

export default LoginMessage;
