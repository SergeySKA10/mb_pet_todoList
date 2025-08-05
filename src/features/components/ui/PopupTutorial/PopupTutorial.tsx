'use client';

import { useState } from 'react';
import './PopupTutorial.scss';

export const PopupTutorial = () => {
    const [step, setStep] = useState<number>(0);
    const [text, setText] = useState<string[]>([
        'Добро поаловать в приложение списка Ваших дел! Давайте научимся с ним работать',
        'Нажимайте на кнопку что сворачивать и разворачивать список дел',
        'Введите текст задачи для быстрого поиска',
        'Выбирайте фильтры для просмотра отфильтрованного списка задач',
        'Отчищайте список выполненных задач',
        'Это считчик активных задач',
        'Нажимайте кнопку, чтобы создать задачу',
    ]);

    return (
        <section className="popup-tutorial">
            <div className="popup-tutorial__block">
                <div className="popup-tutorial__message">
                    <p className="popup-tutorial__message_text">{text[step]}</p>
                    <button className="popup-tutorial__message_btn">
                        Далее
                    </button>
                </div>
            </div>
        </section>
    );
};
