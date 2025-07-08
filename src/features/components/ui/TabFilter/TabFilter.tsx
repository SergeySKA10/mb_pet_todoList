import type { ICounterTaskProps } from '@/shared/components/CounterTaskShared/counterTaskShared';
import './TabFilter.scss';

export const TabFilter = ({ text, active }: ICounterTaskProps) => {
    return <button className={`tabFilter ${active}`}>{text}</button>;
};
