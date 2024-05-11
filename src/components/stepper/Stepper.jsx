import React, { useEffect, useRef, useState } from "react";

const Stepper = ({ steps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, steps) => {
    const newSteps = [...steps];

    let count = 0;

    while (count < newSteps.length) {
      //Current step
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      }
      //Step Complete
      else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      }

      //Pending Step
      else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }

    return newSteps;
  };

  useEffect(() => {
    const stepState = steps.map((step, index) =>
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      )
    );

    stepRef.current = stepState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [steps, currentStep]);

  const displaySteps = newStep.map((step, index) => {
    return (
      <div
        key={index}
        className={
          index !== newStep.length - 1
            ? "w-full flex items-center "
            : " flex items-center"
        }
      >
        <div className="relative flex flex-col items-center 0">
          <div
            className={`rounded-full transition duration-500 ease-in-out w-12 h-12 flex justify-center border border-gray items-center py-3${
              step.selected
                ? "bg-secondary text-white font-bold border border-secondary"
                : ""
            }`}
          >
            {/* Stepper Number */}
            {step.completed ? (
              <span className="text-primary font-bold text-xl rounded-full flex items-center justify-center w-12 h-12 ">
                &#10003;
              </span>
            ) : (
              index + 1
            )}
          </div>

          <div
            className={`absolute top-0 text-center mt-16 w-32 text-sm font-medium uppercase ${
              step.highlighted ? "text-primary" : "text-gray"
            }`}
          >
            {/* Stepper Description */}
            {step.description}
          </div>
        </div>

        <div
          className={`flex-auto border-t transition duration-500 ease-in-out ${
            step.completed ? "border-secondary" : "border-gray"
          }`}
        >
          {/* Stepper Line */}
        </div>
      </div>
    );
  });
  return (
    <div className="mx-4 p-4 flex justify-between items-center wrapper">
      {displaySteps}
    </div>
  );
};

export default Stepper;
