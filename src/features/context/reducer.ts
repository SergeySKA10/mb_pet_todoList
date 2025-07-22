import type { IInitialStateContext } from '@/shared/context/contextShared';
import type { TodoListAction } from './actions';
import { ActionContextType } from './actions';

export default function reducer(
    state: IInitialStateContext,
    actions: TodoListAction
) {
    switch (actions.type) {
        case ActionContextType.SET_SHOW_POPUP:
            return {
                ...state,
                popupWindow: actions.payload,
            };

        case ActionContextType.SET_SHOW_DESK_TASK:
            return {
                ...state,
                taskWindow: actions.payload,
            };

        case ActionContextType.ADD_TASK:
            if (state.task.length === 0) {
                state.task.push(actions.payload);
            } else {
                let l = 0;
                let r = state.task.length - 1;

                while (l < r) {
                    const mid = Math.floor((r + l) / 2);

                    if (actions.payload.id > state.task[mid].id) {
                        l = mid + 1;
                    } else {
                        r = mid;
                    }
                }

                if (l === state.task.length - 1) {
                    state.task[l + 1] = actions.payload;
                } else {
                    for (let i = state.task.length; i > l; i--) {
                        state.task[i] = state.task[i - 1];
                    }

                    state.task[l] = actions.payload;
                }
            }

            return state;

        case ActionContextType.CLEAR_COMPLITE_TASKS:
            const updateTask = [];

            for (let i = 0; i < state.task.length; i++) {
                if (state.task[i].status !== 'complite') {
                    updateTask.push(state.task[i]);
                }
            }

            return {
                ...state,
                task: updateTask,
            };

        case ActionContextType.SET_FILTER:
            return {
                ...state,
                filter: actions.payload,
            };

        case ActionContextType.SET_FILTER_BY_NAME:
            return {
                ...state,
                filterByName: actions.payload,
            };

        case ActionContextType.SET_STATUS_TASK:
            let l = 0;
            let r = state.task.length - 1;

            while (l <= r) {
                const mid = Math.floor((r + l) / 2);

                if (actions.payload === state.task[mid].id) {
                    if (state.task[mid].status === 'active') {
                        state.task[mid].status = 'complite';
                    } else {
                        state.task[mid].status = 'active';
                    }
                    break;
                }

                if (actions.payload < state.task[mid].id) {
                    r = mid;
                } else {
                    l = mid + 1;
                }
            }

            return state;

        default:
            return state;
    }
}
