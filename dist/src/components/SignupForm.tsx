import React from "react";
import ProfileForm from "./ProfileForm";
import SocialForm from "./SocialForm";
import Review from "./Review";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import StepLinks from "./StepLinks";
import {SignupFormProvider} from "./SignupFormContext";

function SignupForm() {
  return (
    <SignupFormProvider>
      <div className="signup-form">
        <StepLinks />
        <Switch>
          <Route path="/" exact component={ProfileForm}>
            {" "}
            <ProfileForm />
          </Route>
          <Route path="/social" component={SocialForm}>
            <SocialForm />
          </Route>
          <Route path="/review" exact component={Review}>
            <Review />
          </Route>
        </Switch>
      </div>
    </SignupFormProvider>
  );
}

export default SignupForm;
