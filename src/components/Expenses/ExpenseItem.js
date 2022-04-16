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
export const ExpenseItem = ({title, amount, date}) => {

    return (
    <Card className="expense-item">
        <ExpenseDate date={date} />
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${amount}</div>
        </div>
    </Card>
    )
}

ExpenseItem.propTypes = {
  amount: PropTypes.number,
  date: PropTypes.object,
  title: PropTypes.string
}
