import React, { useState } from "react";
import PropTypes from 'prop-types'
import './ExpenseItem.css';
import {ExpenseDate} from "./ExpenseDate";
import {Card} from "../UI/Card";

/**
 * Expense Item component
 * @param title Title of the expense
 * @param amount Cost of the expense
 * @param date Date of the expense
 * @returns {JSX.Element} Component
 * @constructor
 */
const ExpenseItem = (props) => {
    const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
        setTitle('updated')
    }
    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
    </Card>
    )
}

ExpenseItem.propTypes = {
  amount: PropTypes.number,
  date: PropTypes.object,
  title: PropTypes.string
}

export default ExpenseItem
