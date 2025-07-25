'use client';

import { useContext } from 'react';
import { TodoListContext } from '@/features/context/TodoContext';
import './CounterTask.scss';

export const CounterTask = () => {
    const { counterActiveTask } = useContext(TodoListContext);

    return <p className="counter">{`${counterActiveTask} items left`}</p>;
};
