'use client';

import { useContext, type JSX } from 'react';
import { TodoListContext } from '@/features/context/TodoContext';
import { filerTask } from '@/features/utils/filterTasks';
import { filterTaskByName } from '@/features/utils/filterTaskByName';
import { Task } from '../ui/Task/Task';
import type { IAllTask } from '@/shared/context/contextShared';
import './TaskField.scss';

export const TaskField = () => {
    const { taskWindow, task, activeFilter, filterByName } =
        useContext(TodoListContext);

    const heightTaskField = taskWindow === 'hide' ? '0px' : '';

    const content: JSX.Element[] = [];

    const onFilterTask = filterByName
        ? filterTaskByName(filterByName, task as IAllTask)
        : filerTask(activeFilter, task as IAllTask);

    for (const key in onFilterTask) {
        if (onFilterTask.hasOwnProperty(key)) {
            const completeTask =
                onFilterTask[key]!.status === 'complete' ? 'complete' : '';
            content.push(
                <Task
                    key={onFilterTask[key]!.id}
                    id={onFilterTask[key]!.id}
                    text={onFilterTask[key]!.text}
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
