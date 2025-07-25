'use client';

import { useContext } from 'react';
import { TodoListContext } from '@/features/context/TodoContext';
import './ArrowButtonInput.scss';

export const ArrowButtonInput = () => {
    const { taskWindow, showDeskTask } = useContext(TodoListContext);
    const scale = taskWindow === 'hide' ? '-1' : '1';

    const handleShowDeskTask = () => {
        if (taskWindow === 'show') {
            showDeskTask('hide');
        } else {
            showDeskTask('show');
        }
    };

    return (
        <button className="arrowInput" onClick={handleShowDeskTask}>
            <span style={{ transform: `scaleY(${scale})` }}></span>
        </button>
    );
};
