import React, { useState } from "react";

function Form() {
  const [login, setLogin] = useState(true);

  return (
    <>
      <div className="formCompChild">
        <div
          className={login && "formCompChild_active"}
          onClick={() => setLogin(true)}
        >
          <h1>Login</h1>
        </div>
        <div
          className={!login && "formCompChild_active"}
          onClick={() => setLogin(false)}
        >
          <h1>Signup</h1>
        </div>
      </div>
      <form>
        {!login && <input type="text" placeholder="Enter name" />}
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button type="submit">{login ? "LOGIN" : "SIGNUP"}</button>
      </form>
      {login && <h4>Forgot Password?</h4>}
      {<h5>or {login ? "login" : "signup"} with</h5>}
    </>
  );
}

export default Form;
