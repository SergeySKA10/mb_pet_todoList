'use client';

import { useContext } from 'react';
import { TodoListContext } from '@/features/context/TodoContext';
import { Task } from '../ui/Task/Task';
import './TaskField.scss';

export const TaskField = () => {
    const { taskWindow, task } = useContext(TodoListContext);

    const heightTaskField = taskWindow === 'hide' ? '0px' : '';

    return (
        <article className="taskField" style={{ height: heightTaskField }}>
            {task.length === 0 ? (
                <p className="no-task">На данный момент у Вас нет задач</p>
            ) : (
                task.map((el) => {
                    const completeTask =
                        el.status === 'complite' ? 'complite' : '';

                    return (
                        <Task
                            key={el.id}
                            id={el.id}
                            text={el.text}
                            complite={completeTask}
                        />
                    );
                })
            )}
        </article>
    );
};
