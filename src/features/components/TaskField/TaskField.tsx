'use client';

import { useContext, type JSX } from 'react';
import { TodoListContext } from '@/features/context/TodoContext';
import { Task } from '../ui/Task/Task';
import './TaskField.scss';

export const TaskField = () => {
    const { taskWindow, task } = useContext(TodoListContext);

    const heightTaskField = taskWindow === 'hide' ? '0px' : '';

    const content: JSX.Element[] = [];

    for (const key in task) {
        if (task.hasOwnProperty(key)) {
            const completeTask =
                task[key]!.status === 'complete' ? 'complete' : '';
            content.push(
                <Task
                    key={task[key]!.id}
                    id={task[key]!.id}
                    text={task[key]!.text}
                    complete={completeTask}
                />
            );
        }
    }

    return (
        <article className="taskField" style={{ height: heightTaskField }}>
            {content.length === 0 ? (
                <p className="no-task">На данный момент у Вас нет задач</p>
            ) : (
                content
            )}
        </article>
    );
};
