import React from "react";
import InputField from "../components/fields/InputField";
import logoImage from "../Images/logo.png";
import LoginImage from "../Images/loginImage.png";
const Account = () => {
  return (
    <div className="min-h-screen bg-white container mx-auto">
      <div>
        {" "}
        <img src={logoImage} alt="Prestige Logo" className="w-36 py-4" />
      </div>

      <div className="flex justify-center">
        <div className="w-1/2 justify-center hidden md:flex">
          <img src={LoginImage} alt="Prestige Logo" />
        </div>

        <div className="w-full md:w-1/2 justify-center">
          <div className="wrapper">
            <div className="">
              <h1 className="text-center text-primary font-semibold text-4xl">
                Log In To Your Account
              </h1>
              <p className="text-center text-gray text-xl my-6 max-w-prose">
                Login and Discover a Great Amount of Opportunities
              </p>
            </div>

            <div>
              <form action="">
                <div>
                  <InputField
                    label="Name"
                    type="text"
                    placeholder="Full Name"
                  />
                </div>

                <div>
                  <InputField
                    label="Email"
                    type="text"
                    placeholder="example@gmail.com"
                  />
                </div>

                <div>
                    <p className="text-primary text-right text-xl">forgot password?</p>
                </div>

                <div className="flex justify-center my-20">
                  <button className="bg-primary text-white text-xl py-2 px-20 rounded-full w-full">Sign In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Account;
