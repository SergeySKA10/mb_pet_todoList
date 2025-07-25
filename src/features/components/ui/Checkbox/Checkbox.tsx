'use client';

import { useContext } from 'react';
import { TodoListContext } from '@/features/context/TodoContext';
import './Checkbox.scss';

export const Checkbox = ({
    id,
    complete,
}: {
    id: string;
    complete: boolean;
}) => {
    const { changeStatusTask } = useContext(TodoListContext);
    const display = complete ? 'block' : 'none';

    const onChangeStatusTask = () => {
        changeStatusTask(id, complete);
    };

    return (
        <button className="checkbox" onClick={onChangeStatusTask}>
            <span style={{ display: display }}></span>
        </button>
    );
};
