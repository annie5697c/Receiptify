import React from 'react';

function Receipt({ expenses }) {
  const total = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="receipt">
      <h2>Receipt</h2>
      <ul>
        {expenses.map((expense) => (
          <li key={expense.id}>
            {expense.description}: ${expense.amount}
          </li>
        ))}
      </ul>
      <p>Total: ${total}</p>
    </div>
  );
}

export default Receipt;
