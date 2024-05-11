import React from "react";
import InputField from "../fields/InputField";

const Account = () => {
  return (
    <div className="wrapper">
      <div>
        <h1 className="text-center text-primary font-semibold text-4xl">
          Register To Your Account
        </h1>
        <p className="text-center text-gray text-xl my-6 max-w-prose">
          Register and Discover a Great Amount of Opportunities
        </p>
      </div>

      <div>
        <form action="">
          <div>
            <InputField label="Name" type="text" placeholder="Full Name" />
          </div>

          <div>
            <InputField
              label="Email"
              type="text"
              placeholder="example@gmail.com"
            />
          </div>

          <div>
            <InputField
              label="Contact No"
              type="text"
              placeholder="+92XXXXXXXXX"
            />
          </div>

          <div>
            <InputField
              label="Date of birth"
              type="text"
              placeholder="DD/MM/YYYY"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Account;
