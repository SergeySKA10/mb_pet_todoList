'use client';

import { useContext } from 'react';
import { TodoListContext } from '@/features/context/TodoContext';
import { TabFilter } from '../ui/TabFilter/TabFilter';
import './Filters.scss';

export const Filters = () => {
    const { filters, activeFilter } = useContext(TodoListContext);

    const content = filters.map((el) => {
        const activeTab = activeFilter === el.id ? 'activeFilter' : '';
        return (
            <TabFilter
                key={el.id}
                id={el.id}
                text={el.text}
                active={activeTab}
            />
        );
    });

    return <div className="filters">{content}</div>;
};
