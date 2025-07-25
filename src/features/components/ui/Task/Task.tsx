import { Checkbox } from '../Checkbox/Checkbox';
import type { ITaskProps } from '@/shared/components/TaskShared/taskShared';
import './Task.scss';

export const Task = ({ id, text, complete }: ITaskProps) => {
    return (
        <div className="task">
            <Checkbox key={id} id={id} complete={!!complete} />
            <p className={`task__text ${complete}`}>{text}</p>
        </div>
    );
};
