import { Checkbox } from '../Checkbox/Checkbox';
import type { ITaskProps } from '@/shared/components/TaskShared/taskShared';
import './Task.scss';

export const Task = ({ id, text, complite }: ITaskProps) => {
    return (
        <div className="task">
            <Checkbox id={id} complete={!!complite} />
            <p className={`task__text ${complite}`}>{text}</p>
        </div>
    );
};
