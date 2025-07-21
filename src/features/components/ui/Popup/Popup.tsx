'use client';

import { useContext } from 'react';
import { TodoListContext } from '@/features/context/TodoContext';
import { ButtonAddTask } from '../Buttons/ButtonAddTask';
import './Popup.scss';

export const Popup = () => {
    const { popupWindow, showPopup } = useContext(TodoListContext);

    const activClazz = popupWindow === 'show' ? 'popup_active' : '';

    return (
        <section className={`popup ${activClazz}`}>
            <div className="popup__window">
                <form>
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
