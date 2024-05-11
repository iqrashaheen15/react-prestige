import React, { useState } from "react";

import logoImage from "../Images/logo.png";
import SignUpImage from "../Images/signupImage.png";
import Stepper from "../components/stepper/Stepper";
import StepperControl from "../components/stepper/StepperControl";
import Verification from "../components/steps/Verification";
import Account from "../components/steps/Account";
import Details from "../components/steps/Details";
import Confirm from "../components/steps/Confirm";
import { StepperContext } from "../contexts/StepperContext";

const Registration = () => {
  const [currentStep, setCurrentStep] = useState(1);

  const steps = ["Account", "Verification", "Details", "Confirm"];
  const displayStep = (steps) => {
    switch (steps) {
      case 1:
        return <Account />;
      case 2:
        return <Verification />;
      case 3:
        return <Details />;
      case 4:
        return <Confirm />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;
    direction === "next" ? newStep++ : newStep--;

    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
  };
  return (
    <>
      <div className="min-h-screen bg-white container mx-auto">
        <div>
          {" "}
          <img src={logoImage} alt="Prestige Logo" className="w-36 py-4" />
        </div>

        <div className="flex">
          <div className="w-1/2 justify-center hidden md:flex">
            <img src={SignUpImage} alt="Prestige Logo" />
          </div>

          <div className="w-full md:w-1/2 justify-center">
            <div className="container horizontal">
              {/* Steps */}
              <Stepper currentStep={currentStep} steps={steps} />

              {/* Display components */}
              <div className=" my-2 md:my-10 p-10">
                <StepperContext.Provider value={{}}>
                  {displayStep(currentStep)}
                </StepperContext.Provider>
              </div>
            </div>
            {/* Button */}
            <StepperControl
              handleClick={handleClick}
              currentStep={currentStep}
              steps={steps}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
