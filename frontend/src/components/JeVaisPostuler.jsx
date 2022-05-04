import React, { useState } from "react";

export default function JeVaisPostuler() {
  const [activ, setActive] = useState(false);
  return (
    <div>
      <p>Hello</p>
      <button
        type="button"
        className={activ ? "btn btn-red " : "btn btn-green"}
        onClick={() => setActive(!activ)}
      >
        Voir
      </button>
    </div>
  );
}
