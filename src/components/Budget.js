import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);

    const max = 20000;

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    const handleChange = value => {
        if(value > max) {
            alert("Budget cannot exceed max value £" + max);
            return;
        } else if(value < totalExpenses ) {
            alert("You cannot reduce the budget value lower than the spending");
            return;
        }
        dispatch({
            type: 'SET_BUDGET',
            payload: value,
        });
      };
    
    return (
        <div className='alert alert-secondary'>
            <label style={{}} htmlFor="cost">Budget:{currency}</label>
                <input
                    required='required'
                    type='number'
                    id='cost'
                    value={budget}
                    style={{width: '9rem', marginLeft: '0.5rem', size: 10}}
                    step={10}
                    onChange={(event) => handleChange(event.target.value)}>
                </input>
        
        </div>
    );
};

export default Budget;