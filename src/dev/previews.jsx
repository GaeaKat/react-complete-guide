import React from 'react';
import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox';
import {PaletteTree} from './palette';
import {ExpenseItem} from "../components/Expenses/ExpenseItem";
import App from "../App";
import {Expenses} from "../components/Expenses/Expenses";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/ExpenseItem">
                <ExpenseItem/>
            </ComponentPreview>
            <ComponentPreview path="/App">
                <App/>
            </ComponentPreview>
            <ComponentPreview path="/Expenses">
                <Expenses/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;
