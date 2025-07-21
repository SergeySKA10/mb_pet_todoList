'use client';

import { useContext, type MouseEvent } from 'react';
import { TodoListContext } from '@/features/context/TodoContext';
import './Button.scss';

export const ButtonAddTask = () => {
    const { showPopup } = useContext(TodoListContext);

    const handleSubmitForm = (
        e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>
    ) => {
        e.preventDefault();
        showPopup('hide');
    };

    return (
        <div className="createBtn">
            <button className="buttonAdd" onClick={(e) => handleSubmitForm(e)}>
                Создать задачу
            </button>
        </div>
    );
};
