import React from "react";

function CustomButton({ id, label, loading, onClick }) {
    return (
        <button
            id={id}
            className={`bg-[#E49318] text-white font-bold py-2 px-4 rounded-full ${loading && "bg-orange-200 cursor-not-allowed"
                }`}
            onClick={onClick}
            disabled={loading}
        >
            {label}
        </button>
    );
}

export default CustomButton;