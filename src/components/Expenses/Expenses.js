import React,{useState} from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';

const Expenses = (props) => {

  const [year,selectedyear]=useState("2020");
  
  function handlechange(data)
  {
    selectedyear(data);
  }

  return (
    <Card className="expenses">

      <ExpensesFilter onChangeFilter={handlechange} selected={year} />
      
      {props.items.map((data)=>{
        return (<ExpenseItem
          key={data.id}
          title={data.title}
          amount={data.amount}
          date={data.date}
        />);
      })}
      
    </Card>

  );
  
}

export default Expenses;
