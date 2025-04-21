import React from "react";
import "./../styles/App.css";
import Step from "./Step.js";

const App = () => {
  const [currentStep, setCurrentStep] = React.useState(1);

  const [formData, setFormData] = React.useState({
    first_name: "",
    last_name: "",
    model: "",
    car_price: "",
    card_info: "",
    expiry_date: "",
  });

  function handleChange(e){
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  }

  function handleNext(){
    setCurrentStep(prev => prev+1)
  }

  function handlePrevious(){
    setCurrentStep(prev => prev-1)
  }
  
  function handleSubmit(e){
    e.preventDefault();
    console.log("Form submitted:", formData);
  }

  return (
    <div>
      <Step
        step={currentStep}
        data = {formData}
        onChange = {handleChange}
        onNext = {handleNext}
        onPrevious = {handlePrevious}
        onSubmit = {handleSubmit}
      />
    </div>
  );
};

export default App;
