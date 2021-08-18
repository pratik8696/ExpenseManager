import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {

  function handledata(data){
    // console.log(data);
    const newExp={
      ...data,
      id:Math.random()
    };

    props.datainapp(newExp);
  }

  return (
    <div className='new-expense'>
      <ExpenseForm datainexpense={handledata} />
    </div>
  );
};

export default NewExpense;
