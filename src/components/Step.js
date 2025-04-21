import React from "react";
import "./../styles/App.css";

const Step = ({ step, data, onChange, onNext, onPrevious, onSubmit }) => {
  return (
    <form onSubmit={onSubmit}>
      {step === 1 && (
        <>
					<h2>Customer Details</h2>
          <label>
            First Name:{" "}
            <input
              id="first_name"
              value={data.first_name}
              onChange={onChange}
            />
          </label>
          <br />
          <label>
            Last Name:{" "}
            <input id="last_name" value={data.last_name} onChange={onChange} />
          </label>
        </>
      )}

      {step === 2 && (
        <>
					<h2>Car Details</h2>
          <label>
            Car Model:{" "}
            <input id="model" value={data.model} onChange={onChange} />
          </label>
          <br />
          <label>
            Car Price:{" "}
            <input id="car_price" value={data.car_price} onChange={onChange} />
          </label>
        </>
      )}

      {step === 3 && (
        <>
					<h2>Payment Details</h2>
          <label>
            Credit Card Number:{" "}
            <input id="card_info" value={data.card_info} onChange={onChange} />
          </label>
          <br />
          <label>
            Expiration Date:{" "}
            <input
							type="date"
              id="expiry_date"
              value={data.expiry_date}
              onChange={onChange}
            />
          </label>
        </>
      )}

      <div style={{ marginTop: "1rem" }}>
        {step > 1 && (
          <button type="button" onClick={onPrevious}>
            Previous
          </button>
        )}
        {step < 3 && (
          <button type="button" onClick={onNext}>
            Next
          </button>
        )}
        {step === 3 && <button type="submit">Submit</button>}
      </div>
    </form>
  );
};

export default Step;
