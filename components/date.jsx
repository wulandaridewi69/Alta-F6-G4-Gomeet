import React from "react";


const { useState } = React;

function BudgetDate(date) {
  return (
    <div className="expense-date">
      <div className="expense-date__month">{date.toLocaleString("de-de", { month: "long" })}</div>
      <div className="expense-date__year">{date.getFullYear()}</div>
      <div className="expense-date__day">{date.toLocaleString("de-de", { day: "2-digit" })}</div>
    </div>
  );
}

export const Date = (props) => {
  
    // Today
    const date = new Date();
    
    // Hardcoded 
    //const date = new Date('2020-01-01');
    
    return (  
        <div>
            {BudgetDate(date)}
        </div>
    )
}
ReactDOM.render(<Example />, document.getElementById("react"));
