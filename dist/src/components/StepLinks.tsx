import React from "react";

import { NavLink } from "react-router-dom";
import { useSignupForm } from "./SignupFormContext";

function isEmpty(obj: {}) {
  console.log("length ....:", Object.values(obj).length);
  return Object.values(obj).length === 0;
}
function StepLinks() {
  const { profile, social } = useSignupForm();
  // if profile object is empty
  const isProfileDone: boolean = !isEmpty(profile);
  console.log("isProfileDone:", isProfileDone);

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
