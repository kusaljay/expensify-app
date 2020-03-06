import React from 'react';

const EditExpense = (props) => (
  <div>
    Edit expense with the id of {props.match.params.id}
  </div>
);


export default EditExpense;