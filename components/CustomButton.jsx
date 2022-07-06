import React from "react";

function CustomButton({ id, label, loading, onClick }) {
    return (
        <button
            id={id}
            className={className}
            onClick={onClick}
            disabled={loading}
        >
            {label}
        </button>
    );
}

export default CustomButton;