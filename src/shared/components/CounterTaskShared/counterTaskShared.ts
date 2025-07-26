import type { ActiveFilter } from '@/shared/context/contextShared';
export interface ICounterTaskProps {
    id: ActiveFilter;
    text: string;
    active: 'activeFilter' | '';
}
