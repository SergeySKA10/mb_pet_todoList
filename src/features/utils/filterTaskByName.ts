import type { FilterTask } from '@/shared/utilsShared/utilsShared';

// функция фильтрации по названию задачи
export const filterTaskByName: FilterTask = (filter, task) => {
    if (filter === '') {
        return task;
    } else {
        const filterTask: Parameters<FilterTask>['1'] = {};
        for (const key in task) {
            if (task[key].text.includes(filter)) {
                filterTask[task[key].id] = task[key];
            }
        }
        return filterTask;
    }
};
