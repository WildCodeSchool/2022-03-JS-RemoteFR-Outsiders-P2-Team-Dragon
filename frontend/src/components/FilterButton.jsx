import React, { useState } from "react";

export default function FilterButton({ label }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsChecked(!isChecked);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={isChecked && "checked"}
    >
      {label}
    </button>
  );
}
