import type { ITask } from '@/shared/context/contextShared';

// утилита для работы с localStorage
export const workWithLocalStorage = () => {
    const storage = 'taskList';

    // добавление задачи
    const addTaskInStorage = (task: ITask) => {
        if (localStorage.getItem(storage)) {
            const obj = JSON.parse(localStorage.getItem(storage) as string);
            if (!obj[task.id]) {
                obj[task.id] = task;
                localStorage.setItem(storage, JSON.stringify(obj));
            } else {
                throw new Error('Задача с таким id уже существует');
            }
        } else {
            localStorage.setItem(storage, JSON.stringify({ [task.id]: task }));
        }
    };

    // отчиска от выполненных задач
    const clearCompliteTasksInStorage = () => {
        if (localStorage.getItem(storage)) {
            const obj = JSON.parse(localStorage.getItem(storage) as string);

            for (const key in obj) {
                if (obj[key].status === 'complete') {
                    delete obj[key];
                }
            }

            localStorage.setItem(storage, JSON.stringify(obj));
        }
    };

    // установить статус задачи выполненной в localStorage
    const setStatusCompliteTask = (id: string) => {
        const obj = JSON.parse(localStorage.getItem(storage) as string);
        obj[id].status = 'complete';
        localStorage.setItem(storage, JSON.stringify(obj));
    };

    return {
        storage,
        addTaskInStorage,
        clearCompliteTasksInStorage,
        setStatusCompliteTask,
    };
};
