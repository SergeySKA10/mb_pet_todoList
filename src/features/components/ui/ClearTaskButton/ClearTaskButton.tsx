'use client';

import { useContext } from 'react';
import { TodoListContext } from '@/features/context/TodoContext';
import { workWithLocalStorage } from '@/features/utils/workWithLoaclStorage';

import './ClearTaskButton.scss';

export const ClearTaskButton = () => {
    const { clearCompliteTask } = useContext(TodoListContext);
    const { clearCompliteTasksInStorage } = workWithLocalStorage();

    return (
        <button
            className="clearCompletedBtn"
            onClick={() => {
                clearCompliteTasksInStorage();
                clearCompliteTask();
            }}
        >
            <span>clear completed</span>
        </button>
    );
};
