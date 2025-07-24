'use client';

import { useContext } from 'react';
import { TodoListContext } from '@/features/context/TodoContext';
import './CounterTask.scss';

export const CounterTask = () => {
    const { task } = useContext(TodoListContext);

    return <p className="counter">{`${task.length} items left`}</p>;
};
