import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSignupForm } from "./SignupFormContext";

type FormValues = {
  twitter: string;
  facebook: string;
};

function SocialForm() {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm<FormValues>();
  const { social, setSocial } = useSignupForm();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    setSocial(data);
    history.push("/review");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>How can we find you on Social?</h2>
      <p>
        <label htmlFor="twitter">Twitter</label>
        <input
          type="text"
          name="twitter"
          defaultValue={social.twitter}
          ref={register({ required: true })}
        />
      </p>
      {errors.twitter && <p>Twitter is required</p>}
      <p>
        <label htmlFor="facebook">Facebook</label>
        <input
          type="text"
          name="facebook"
          defaultValue={social.facebook}
          ref={register({
            required: true,
          })}
        />
      </p>
      {errors.facebook && <p>Facebook is required</p>}
      <input type="submit" value="Next" />
    </form>
  );
}

export default SocialForm;
