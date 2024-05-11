import React from "react";

const StepperControl = ({handleClick,currentStep,steps}) => {
  return (
    <div className="container flex justify-around">
      {/* <button className="bg-white text-gray-800 uppercase py-2 px-4 rounded-xl cursor-pointer border-2 border-slate-300">
        Back
      </button> */}


      <button onClick={()=>handleClick("next")} className="bg-white text-xl text-gray-800 hover:bg-secondary hover:text-white hover:border-secondary uppercase py-2 px-4 rounded-xl cursor-pointer border-2 border-slate-300">
        {currentStep === steps.length  ? "Confirm":"Next"}
      </button>
    </div>
  );
};

export default StepperControl;
