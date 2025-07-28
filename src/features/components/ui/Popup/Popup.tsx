'use client';

import { nanoid } from 'nanoid';
import { useContext, type FormEvent } from 'react';
import { TodoListContext } from '@/features/context/TodoContext';
import { workWithLocalStorage } from '@/features/utils/workWithLoaclStorage';
import type { ITask } from '@/shared/context/contextShared';
import { ButtonAddTask } from '../Buttons/ButtonAddTask';
import './Popup.scss';

export const Popup = () => {
    const { popupWindow, showPopup, addTask } = useContext(TodoListContext);
    const { addTaskInStorage } = workWithLocalStorage();
    const activClazz = popupWindow === 'show' ? 'popup_active' : '';

    const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const formData = new FormData(e.currentTarget);

        const data: ITask = {
            id: '',
            text: '',
            status: 'active',
        };

        formData.forEach((value, key) => {
            data[key] = (value as string).toLocaleLowerCase();
        });

        data.id = nanoid();
        data.status = 'active';

        addTaskInStorage(data);
        addTask(data);

        e.currentTarget.reset();

        showPopup('hide');
    };

    return (
        <section className={`popup ${activClazz}`}>
            <div className="popup__window">
                <form onSubmit={handleSubmitForm}>
                    <span
                        className="popup__close"
                        onClick={() => showPopup('hide')}
                    ></span>
                    <textarea
                        className="popup__task"
                        name="text"
                        id="text_task"
                        placeholder="Опишите вашу задачу"
                    ></textarea>
                    <ButtonAddTask />
                </form>
            </div>
        </section>
    );
};
