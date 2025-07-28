'use client';

import { useContext } from 'react';
import { TodoListContext } from '@/features/context/TodoContext';
import { workWithLocalStorage } from '@/features/utils/workWithLoaclStorage';
import './Checkbox.scss';

export const Checkbox = ({
    id,
    complete,
}: {
    id: string;
    complete: boolean;
}) => {
    const { changeStatusTask } = useContext(TodoListContext);
    const { setStatusCompliteTask } = workWithLocalStorage();
    const display = complete ? 'block' : 'none';

    const onChangeStatusTask = () => {
        setStatusCompliteTask(id);
        changeStatusTask(id, complete);
    };

    return (
        <button className="checkbox" onClick={onChangeStatusTask}>
            <span style={{ display: display }}></span>
        </button>
    );
};
