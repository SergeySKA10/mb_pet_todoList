'use client';

import { useState, useEffect, useContext, type ChangeEvent } from 'react';
import { TodoListContext } from '@/features/context/TodoContext';
import './Input.scss';

export const Input = () => {
    const [valueInput, setValueInput] = useState<string>('');
    const [debounce, setDebounce] = useState<string>('');

    const { setFilterByName } = useContext(TodoListContext);

    // функция обработки события change - изменение состяния valueInput
    const onHandleInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value);
    };

    // установка состояния debounce с таймером
    useEffect(() => {
        const timerID = setTimeout(() => {
            setDebounce(valueInput);
        }, 300);

        return () => {
            clearTimeout(timerID);
        };
    }, [valueInput]);

    // установка фильтра по тексту задачи
    useEffect(() => {
        setFilterByName(debounce.toLocaleLowerCase());
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
