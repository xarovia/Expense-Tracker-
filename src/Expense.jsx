import React from 'react';

const Expense = (props) => {
  const handleClick = (e) => {
    alert("You clicked " + props.name + " - Php " + props.price)
  }

  return (

      <div className="container">
        <div className="box" onClick={handleClick}>
          <div>
            <b>{props.name}</b> - Php {props.price}
          </div>
        </div>
      </div>
    
  );
};

export default Expense;
