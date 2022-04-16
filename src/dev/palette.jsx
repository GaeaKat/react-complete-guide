import React from 'react';
import {
    Category,
    Component,
    Variant,
    Palette,
} from '@react-buddy/ide-toolbox';

export const PaletteTree = () => (
    <Palette>
        <Category name="HTML">
            <Component name="a">
                <Variant requiredParams={['href']}>
                    <a>Link</a>
                </Variant>
            </Component>
            <Component name="button">
                <Variant>
                    <button>Button</button>
                </Variant>
            </Component>
        </Category>
        <Category name="Main">
            <Component name="ExpenseItem">
                <Variant requiredParams={['title','amount','date']}>
                    <ExpenseItem/>
                </Variant>
            </Component>
        </Category>
    </Palette>
);
