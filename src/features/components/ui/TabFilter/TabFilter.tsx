'use client';

import { useContext } from 'react';
import { TodoListContext } from '@/features/context/TodoContext';
import type { ICounterTaskProps } from '@/shared/components/CounterTaskShared/counterTaskShared';
import './TabFilter.scss';

export const TabFilter = ({ id, text, active }: ICounterTaskProps) => {
    const { setActiveFilter } = useContext(TodoListContext);

    return (
        <button
            className={`tabFilter ${active}`}
            onClick={() => setActiveFilter(id)}
        >
            {text}
        </button>
    );
};
