import React from "react";
import { TiTick } from "react-icons/ti";

const Confirm = () => {
  return (
    <div className="wrapper">
      <div>
      <div className="md:flex-shrink-0 flex justify-center my-6">
          <div className="h-20 w-20 flex items-center justify-center rounded-full bg-secondary text-white">
            {<TiTick className="w-1/2 h-full" />}
          </div>
        </div>
        <h1 className="text-center text-primary font-semibold text-3xl">
          All done!
        </h1>
        <p className="text-center text-xl my-6 max-w-prose">
          Your Prestige+ account is ready to go.
        </p>

        <p className="text-center text-xl my-6 max-w-prose">
          Save your card number, you might need it to log back in. Your digital
          card will be emailed to you.
        </p>
      </div>

      <div>
        <p className="text-center text-xl my-6 max-w-prose">
          Your Prestige+ Number
        </p>
        <div className="text-center">
        <button className=" text-primary text-xl my-2 text-center py-4 px-20 border border-secondary rounded-xl">
        P+N00PN00MN
        </button>
        </div>
      
      </div>
    </div>
  );
};

export default Confirm;
