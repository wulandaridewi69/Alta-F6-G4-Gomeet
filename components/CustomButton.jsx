import React from "react";

function CustomButton({ type, id, label, className, loading, onClick }) {
  return (
    <button
      id={id}
      className={className}
      onClick={onClick}
      disabled={loading}
      type={type}
    >
      {label}
    </button>
  );
}

export default CustomButton;
