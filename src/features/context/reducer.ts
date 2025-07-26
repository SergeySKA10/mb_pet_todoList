'use client';

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
            if (state.task[actions.payload.id]) {
                return state;
            } else {
                state.task[actions.payload.id] = actions.payload;
                return {
                    ...state,
                    counterActiveTask: (state.counterActiveTask += 1),
                };
            }

        case ActionContextType.CLEAR_COMPLITE_TASKS:
            const updateTask: IInitialStateContext['task'] = {};
            for (const key in state.task) {
                if (state.task[key]?.status !== 'complete') {
                    updateTask[key] = state.task[key];
                }
            }

            return {
                ...state,
                task: updateTask,
            };

        case ActionContextType.SET_FILTER:
            return {
                ...state,
                activeFilter: actions.payload,
            };

        case ActionContextType.SET_FILTER_BY_NAME:
            return {
                ...state,
                filterByName: actions.payload,
            };

        case ActionContextType.SET_STATUS_TASK:
            if (
                state.task[actions.payload.id] &&
                state.task[actions.payload.id]?.status === 'active' &&
                !actions.payload.value
            ) {
                state.task[actions.payload.id]!.status = 'complete';
                state.counterActiveTask = state.counterActiveTask -= 1;
            } else if (
                state.task[actions.payload.id] &&
                state.task[actions.payload.id]?.status === 'complete' &&
                actions.payload.value
            ) {
                state.task[actions.payload.id]!.status = 'active';
                state.counterActiveTask = state.counterActiveTask += 1;
            }
            return {
                ...state,
            };

        default:
            return state;
    }
}
