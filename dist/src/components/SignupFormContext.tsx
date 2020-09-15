import React, { createContext, useContext, useState } from "react";
import SignupForm from "./SignupForm";

// If you’re familiar with the context API before Hooks,
// useContext(MyContext) is equivalent to static
// contextType = MyContext in a class,
// or to <MyContext.Consumer>.
// useContext(MyContext) only lets you read the context and
// subscribe to its changes. You still need
// a <MyContext.Provider> above in the tree to provide the
// value for this context.
// interface ContextState {
//   profile: {};
//   setProfile: {};
//   social: {};
//   setSocial: {};
// }

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
      // value={{ profile, setProfile, social, setSocial }}
      value={{ profile, social, setProfile, setSocial }}
    >
      {children}
    </SignupFormContext.Provider>
  );
};

export default SignupFormProvider;
