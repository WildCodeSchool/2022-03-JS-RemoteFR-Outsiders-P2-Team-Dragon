import React, { useState } from "react";

export default function FilterButton({ label, setFilters }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    if (!isChecked) {
      setFilters((old) => [...old, label]);
    } else {
      setFilters((old) => old.filter((value) => value !== label));
    }
    setIsChecked(!isChecked);
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
