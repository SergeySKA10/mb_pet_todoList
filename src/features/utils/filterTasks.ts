import type { FilterTask } from '@/shared/utilsShared/utilsShared';

export const filerTask: FilterTask = (filter, task) => {
    switch (filter) {
        case 'all':
            return task;
        case 'active':
            const activeTask: Parameters<FilterTask>['1'] = {};
            for (const key in task) {
                if (task[key].status === 'active') {
                    activeTask[task[key].id] = task[key];
                }
            }
            return activeTask;
        case 'complete':
            const completeTask: Parameters<FilterTask>['1'] = {};
            for (const key in task) {
                if (task[key].status === 'complete') {
                    completeTask[task[key].id] = task[key];
                }
            }
            return completeTask;
        default:
            return task;
    }
};
