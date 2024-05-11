import React from "react";
import InputField from "../fields/InputField";

const Details = () => {
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
            <InputField label="Country" type="text" placeholder="Country" />
          </div>

          <div>
            <InputField label="LGB" type="text" placeholder="LGB" />
          </div>

          <div>
            <InputField
              label="Password"
              type="password"
              placeholder="Password"
            />
          </div>

          <div>
            <InputField
              label="Confirm Password"
              type="password"
              placeholder="Confirm Password"
            />
          </div>

          <div>
            <p className="text-black font-semibold text-lg max-w-prose">
              I want to receive text message from Prestige + Reward LLC
              Unsubscribe by replying STOP
            </p>
          </div>

          <div className="mt-4">
            <label htmlFor="">Do you have a promo code</label>
            <div className="mt-2">
              <input
                type="text"
                className="w-full h-16 text-lg p-3 border border-primary shadow-md focus:outline-none rounded-lg "
                placeholder="Enter Promo Code"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Details;
