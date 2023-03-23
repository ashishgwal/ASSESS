import React from "react";
import facebook from "../static/facebook-logo-2019.svg";
import google from "../static/google.svg";
import twitter from "../static/twitter.svg";

function Icons() {
  return (
    <>
      <div className="icons">
        <div className="icon">
          <img src={google} alt="google" />
        </div>
        <div className="icon">
          <img src={facebook} alt="facebook" />
        </div>
        <div className="icon">
          <img src={twitter} alt="twitter" />
        </div>
      </div>
      <h5>
        Don't have an Account? <b>Create new now!</b>
      </h5>
      <h5>
        By signing up, you are agree with our <b><u>Terms & Conditions</u> </b>
      </h5>
    </>
  );
}

export default Icons;
