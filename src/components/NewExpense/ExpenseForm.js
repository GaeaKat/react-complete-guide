import PropTypes from 'prop-types'
import React, {useState} from "react";

import './ExpenseForm.css'

const ExpenseForm = ({onSaveExpenseData}) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [ enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangedHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHander = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        }
        onSaveExpenseData(expenseData);
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')

    }

    return <form onSubmit={submitHander}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" onChange={titleChangeHandler} value={enteredTitle}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="amount">Amount</label>
                <input type="number" name="amount" min="0.01" step="0.01" onChange={amountChangeHandler} value={enteredAmount}/>
            </div>
            <div className="new-expense__control">
                <label htmlFor="date">Date</label>
                <input type="date" name="date" min="2019-01-01" max="2022-12-31" onChange={dateChangedHandler} value={enteredDate}/>
            </div>
            <div className="new-expense__actions">
            <button type="submit">Add Expense </button>
            </div>
        </div>
    </form>
}

export default ExpenseForm

ExpenseForm.propTypes = {
  onSaveExpenseData: PropTypes.func.isRequired
}
