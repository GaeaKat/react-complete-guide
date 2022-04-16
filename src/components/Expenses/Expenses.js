import './Expenses.css'
import {ExpenseItem} from "./ExpenseItem";
import {Card} from "../UI/Card";
export const Expenses = ({ expenses }) => {
    return (
        <Card className="expenses">
            {expenses.map( item => <ExpenseItem title={item.title} amount={item.amount} date={item.date} /> )}
        </Card>
    )
}
