'use client';

import { TabFilter } from '../ui/TabFilter/TabFilter';
import './Filters.scss';

interface ITabFilter {
    id: string;
    text: string;
}
const initialStateFilter: ITabFilter[] = [
    {
        id: 'all',
        text: 'all',
    },
    {
        id: 'active',
        text: 'active',
    },
    {
        id: 'completed',
        text: 'completed',
    },
];

export const Filters = () => {
    const content = initialStateFilter.map((el, i) => {
        const activeTab = i === 0 ? 'activeFilter' : '';
        return <TabFilter key={el.id} text={el.text} active={activeTab} />;
    });

    return <div className="filters">{content}</div>;
};
