import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="btn btn-secondary float-end btn-sm" style={{ marginRight: "2%" }} onClick={() => loginWithRedirect()}>Log In</button>;
};

export default LoginButton;
