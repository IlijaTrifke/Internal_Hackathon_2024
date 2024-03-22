import React from "react";
import { SignIn, SignUp } from "@clerk/nextjs";

const Auth = ({ params }) => {
  const action = params.action;
  if (action == "sign-up") {
    return (
      <div className="flex w-full py-10 justify-center items-center">
        <SignUp afterSignUpUrl="/registration" />
      </div>
    );
  } else if (action == "sign-in") {
    return (
      <div className="flex w-full py-10 justify-center items-center">
        <SignIn afterSignInUrl="/" />
      </div>
    );
  }
};

export default Auth;
