import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useHistory } from "react-router-dom";

type FormValues = {
  name: string;
  email: string;
};
// email validation is done from the below thread:
//https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
function ProfileForm() {
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => history.push("/social");
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>Tell us about yourself</h2>
      <p>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" ref={register({ required: true })} />
      </p>
      {errors.name && <p>Name is required</p>}
      <p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          ref={register({
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
      </p>
      {errors.email && <p>A valid email is required</p>}
      <input type="submit" value="Next" />
    </form>
  );
}

export default ProfileForm;
