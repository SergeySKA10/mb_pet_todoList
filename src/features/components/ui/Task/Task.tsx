import { Checkbox } from '../Checkbox/Checkbox';
import type { ITaskProps } from '@/shared/components/TaskShared/taskShared';
import './Task.scss';

export const Task = ({ text, complete }: ITaskProps) => {
    return (
        <div className="task">
            <Checkbox complete={!!complete} />
            <p className={`task__text ${complete}`}>{text}</p>
        </div>
    );
};
