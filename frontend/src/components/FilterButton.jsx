import React, { useState } from "react";

export default function FilterButton({ label, onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    setIsChecked(!isChecked);
    onChange({
      target: {
        name: label.toLowerCase(),
        value: !isChecked,
      },
    });
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={isChecked ? "checked" : undefined}
    >
      {label}
    </button>
  );
}
