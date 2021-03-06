import React, { FormEvent } from "react";
import { useSignupForm } from "./SignupFormContext";

function Review() {
  const { profile, social } = useSignupForm();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Review all your info</h2>
      <p>
        <strong>Name</strong>: {profile.name}
      </p>
      <p>
        <strong>Email</strong>: {profile.email}
      </p>
      <p>
        <strong>Twitter</strong>: {social.twitter}
      </p>
      <p>
        <strong>Facebook</strong>: {social.facebook}
      </p>

      <input type="submit" value="Submit All Info" />
    </form>
  );
}

export default Review;
