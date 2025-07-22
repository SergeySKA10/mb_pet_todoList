'use client';

import { useContext } from 'react';
import { TodoListContext } from '@/features/context/TodoContext';
import { Task } from '../ui/Task/Task';
import './TaskField.scss';

interface ITask {
    id: string;
    text: string;
}

const initialStateTask: ITask[] = [
    {
        id: 'task1',
        text: 'test task',
    },
    {
        id: 'task2',
        text: 'good code',
    },
    {
        id: 'task3',
        text: 'test complete',
    },
];

export const TaskField = () => {
    const { taskWindow } = useContext(TodoListContext);

    const heightTaskField = taskWindow === 'hide' ? '0px' : '';

    const tasks = initialStateTask.map((el, i) => {
        const completeTask = i === 1 ? 'complete' : '';

        return <Task key={el.id} text={el.text} complete={completeTask} />;
    });

    return (
        <article className="taskField" style={{ height: heightTaskField }}>
            {tasks}
        </article>
    );
};
