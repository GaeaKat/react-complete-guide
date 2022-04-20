import './Expenses.css'
import ExpenseItem from "./ExpenseItem";
import {Card} from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
export const Expenses = ({ expenses }) => {
    const [filterYear, setFilterYear] = useState('2020')

    const filterChangeHandler = (year) => {
        setFilterYear(year)
    }
    return (
        <div>
            <ExpensesFilter onFilterChange={filterChangeHandler} value={filterYear} />
        <Card className="expenses">
            {expenses.filter(item => item.date.getFullYear().toString() === filterYear).map(item => <ExpenseItem title={item.title} amount={item.amount} date={item.date} /> )}
        </Card>
        </div>
    )
}
