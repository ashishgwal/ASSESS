import React from "react";
import Icons from "./Icons";
import Form from "./Form";
import Header from "./Header";

function Login() {
  return (
    <div className="container">
      <div className="formComp">
        <Header />
        <Form />
        <Icons />
      </div>
    </div>
  );
}

export default Login;
