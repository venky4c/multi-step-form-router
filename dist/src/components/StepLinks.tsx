import React from "react";

import { NavLink } from "react-router-dom";
import { useSignupForm } from "./SignupFormContext";

// The js style to check if an object is empty does not work in TS
// as we are passing empty values to profile and social in useState hooks
// So we are checking if the value is truthy or falsy and then filtering it
// if they have some legit values in it.
function isEmpty(obj: {}) {
  return !Object.values(obj).filter((value) => !!value).length;
}
function StepLinks() {
  const { profile, social } = useSignupForm();
  // if profile object is empty
  const isProfileDone: boolean = !isEmpty(profile);
  console.log("isProfileDone:", isProfileDone);
  // if social object is empty
  const isSocialDone: boolean = !isEmpty(social);
  console.log("isSocialDone:", isSocialDone);

  return (
    <div className="step-links">
      <NavLink to="/" exact>
        {isProfileDone ? "❤️" : "🤍"} Profile <span />
      </NavLink>

      {isProfileDone ? (
        <NavLink to="/social">
          {isSocialDone ? "❤️" : "🤍"} Social <span />
        </NavLink>
      ) : (
        <a>
          Social <span />
        </a>
      )}

      {isProfileDone && isSocialDone ? (
        <NavLink to="/review" style={{ float: "right" }}>
          Review <span />
        </NavLink>
      ) : (
        <a style={{ float: "right" }}>
          Review <span />
        </a>
      )}
    </div>
  );
}

export default StepLinks;
