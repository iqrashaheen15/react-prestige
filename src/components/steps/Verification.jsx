import React from "react";

const Verification = () => {
  const [otp, setOtp] = React.useState(new Array(4).fill(""));

  const handleChange = (e1, index) => {
    if (isNaN(e1.value)) return false;

    setOtp([...otp.map((data, i) => (i === index ? e1.value : data))]);

    if (e1.nextSibling) {
      e1.nextSibling.focus();
    }
  };

  return (
    <div className="wrapper">
      <div>
        <h1 className="text-center text-primary font-semibold text-4xl">
          Enter the Verify Code
        </h1>
        <p className="text-center text-gray text-xl my-6 max-w-prose">
          We have sent you code for verification in Email
        </p>
        <h1 className="text-center text-black font-semibold text-xl">
          +10 876 777 3898
        </h1>
      </div>

      <div className="w-[80%] mx-auto flex flex-row justify-center gap-6 my-10">
        {otp.map((data, i) => {
          return (
            <div>
              <input
                key={i}
                value={data}
                type="text"
                name="otp"
                maxLength={1}
                className="border-b-2 border-primary w-14 text-2xl m-auto text-center focus:outline-none"
                onChange={(e) => handleChange(e.target, i)}
                onFocus={(e) => e.target.select()}
              />
            </div>
          );
        })}
      </div>

      <div>
        <h1 className="text-center text-black font-semibold text-xl">
          Resend a new code
        </h1>
        <p className=" text-primary text-xl my-2 text-center">
          Aailable in 10 seconds
        </p>
      </div>
    </div>
  );
};

export default Verification;
