import React from 'react';

const EditExpense = (props) => {
  console.log(props);
  
  return (
    <div>
      Edit expense with the id of {props.match.params.id}
    </div>
  );
}

export default EditExpense;