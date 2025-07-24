'use client';

import { useContext } from 'react';
import { TodoListContext } from '@/features/context/TodoContext';

import './ClearTaskButton.scss';

export const ClearTaskButton = () => {
    const { clearCompliteTask } = useContext(TodoListContext);

    return (
        <button className="clearCompletedBtn" onClick={clearCompliteTask}>
            <span>clear completed</span>
        </button>
    );
};
