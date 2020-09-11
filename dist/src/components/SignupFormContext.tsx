import React, { createContext, useContext, useState } from "react";
import SignupForm from "./SignupForm";

type ContextValue = {
  message: string;
};

export const SignupFormContext = createContext({});

export const useSignupForm = () => useContext(SignupFormContext);

const SignupFormProvider: React.FC = ({ children }) => {
  const [profile, setProfile] = useState({});
  const [social, setSocial] = useState({});

  return (
    <SignupFormContext.Provider
      value={{ profile, setProfile, social, setSocial }}
    >
      {children}
    </SignupFormContext.Provider>
  );
};

export default SignupFormProvider;
