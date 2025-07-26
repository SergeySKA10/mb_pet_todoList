'use client';

import { useState, useEffect, useContext, type ChangeEvent } from 'react';
import { TodoListContext } from '@/features/context/TodoContext';
import './Input.scss';

export const Input = () => {
    const [valueInput, setValueInput] = useState<string>('');
    const [debounce, setDebounce] = useState<string>('');

    const { setFilterByName } = useContext(TodoListContext);

    const onHandleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value);
    };

    useEffect(() => {
        const timerID = setTimeout(() => {
            setDebounce(valueInput);
        }, 300);

        return () => {
            clearTimeout(timerID);
        };
    }, [valueInput]);

    useEffect(() => {
        console.log(debounce);
        // setFilterByName(debounce);
    }, [debounce]);

    return (
        <input
            name="filter"
            className="input"
            type="text"
            placeholder="What needs to be done?"
            onChange={onHandleInput}
        />
    );
};
