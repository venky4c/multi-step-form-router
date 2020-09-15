import React, { createContext, useContext, useState } from "react";
import SignupForm from "./SignupForm";

// If you’re familiar with the context API before Hooks,
// useContext(MyContext) is equivalent to static
// contextType = MyContext in a class, or to <MyContext.Consumer>.
// useContext(MyContext) only LETS YOU READ THE 'CONTEXT' & SUBSCRIBE TO IT'S CHANGES.
// You still need a <MyContext.Provider> above in the tree TO PROVIDE THE VALUE FOR THIS CONTEXT.

interface IProfile {
  name: string;
  email: string;
}

interface ISocial {
  twitter: string;
  facebook: string;
}

type SignupFormContext = {
  profile: IProfile;
  social: ISocial;
  setProfile: React.Dispatch<React.SetStateAction<IProfile>>;
  setSocial: React.Dispatch<React.SetStateAction<ISocial>>;
};
export const SignupFormContext = createContext<SignupFormContext>({
  profile: { name: "", email: "" },
  social: { twitter: "", facebook: "" },
  setProfile: () => {},
  setSocial: () => {},
});

export const useSignupForm = () => useContext(SignupFormContext);

export const SignupFormProvider: React.FC = ({ children }) => {
  const [profile, setProfile] = useState({ name: "", email: "" });
  const [social, setSocial] = useState({ twitter: "", facebook: "" });

  return (
    <SignupFormContext.Provider
      value={{ profile, social, setProfile, setSocial }}
    >
      {children}
    </SignupFormContext.Provider>
  );
};

export default SignupFormProvider;
