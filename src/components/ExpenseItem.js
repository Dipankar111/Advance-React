import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from './Card';
import './ExpenseItem.css';

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);
  
  const clickHandler = () => {
    setTitle('DELETED!');
    console.log(title);
  };

  const clickAmount = () => {
    setAmount(props.amount+100);
    console.log(props.amount+100); 
  };

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>${amount}</div>
      </div>
      <button onClick={clickHandler}>Delete Expenses</button>
      <button onClick={clickAmount}>Add amount</button>
    </Card>
  );
}

export default ExpenseItem;
