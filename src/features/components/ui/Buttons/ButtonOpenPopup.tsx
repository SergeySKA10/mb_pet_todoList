'use client';
import { useContext } from 'react';
import { TodoListContext } from '@/features/context/TodoContext';
import './Button.scss';

export const ButtonOpenPopup = () => {
    const { showPopup } = useContext(TodoListContext);

    return (
        <div className="createBtn">
            <button
                className="buttonAdd"
                onClick={() => {
                    showPopup('show');
                }}
            >
                Добавить задачу
            </button>
        </div>
    );
};
