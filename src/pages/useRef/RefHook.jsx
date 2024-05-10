import React, { createRef, useEffect, useRef, useState } from "react";

const RefHook = () => {
  // 1. Re-renders
  // State which will cause re-render
  const [state, setState] = useState();

  const renders = useRef(0);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  //   2. Accessing dom elements
  const inputRef = useRef();

  //   3. OTP
  const otpBoxes = useRef(Array.from({ length: 4 }, () => createRef(null)));
  console.log({ otpBoxes });

  const handleChange = (value, index) => {
    if (value && index < otpBoxes.current.length - 1) {
      otpBoxes.current[index + 1].current.focus();
    }
  };

  return (
    <div className="flex-column-container">
      <h1>UseRef Hook examples:</h1>
      <h3>1. Number of re-renders: {renders.current}</h3>
      <button onClick={() => setState(!state)}>Re-render</button>
      <h3>2. Access dom elements</h3>
      <input
        ref={inputRef}
        type="text"
        placeholder="Click on the focus button"
      />
      <button
        onClick={() => {
          inputRef.current.focus();
        }}
      >
        Focus
      </button>

      <h3>3. OTP System</h3>
      <div style={{ display: "flex", gap: "10px" }}>
        {otpBoxes.current.map((ref, index) => {
          return (
            <input
              onChange={(e) => handleChange(e.target.value, index)}
              key={index}
              ref={ref}
              type="number"
              maxLength={1}
              style={{ width: "50px" }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RefHook;
