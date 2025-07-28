'use client';

import { createContext, useReducer } from 'react';
import reducer from './reducer';
import { ActionContextType } from './actions';
import type {
    IInitialStateContext,
    IProviderProps,
    ITodoListContext,
    ITask,
    IAllTask,
} from '@/shared/context/contextShared';

const initialStateContext: IInitialStateContext = {
    task: {},
    taskWindow: 'show',
    popupWindow: 'hide',
    counterActiveTask: 0,
    filters: [
        {
            id: 'all',
            text: 'all',
        },
        {
            id: 'active',
            text: 'active',
        },
        {
            id: 'complete',
            text: 'completed',
        },
    ],
    activeFilter: 'all',
    filterByName: '',
};

export const TodoListContext = createContext<ITodoListContext>({
    task: initialStateContext.task,
    taskWindow: initialStateContext.taskWindow,
    popupWindow: initialStateContext.popupWindow,
    filters: initialStateContext.filters,
    activeFilter: initialStateContext.activeFilter,
    filterByName: initialStateContext.filterByName,
    counterActiveTask: initialStateContext.counterActiveTask,
    addTask: () => {},
    showPopup: () => {},
    showDeskTask: () => {},
    clearCompliteTask: () => {},
    changeStatusTask: () => {},
    setActiveFilter: () => {},
    setFilterByName: () => {},
    mergeTaskWithTaskFromLocalStorage: () => {},
});

export const TodoListContextProvider = ({ children }: IProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialStateContext);

    const value: ITodoListContext = {
        task: state.task,
        popupWindow: state.popupWindow,
        taskWindow: state.taskWindow,
        filters: state.filters,
        activeFilter: state.activeFilter,
        filterByName: state.filterByName,
        counterActiveTask: state.counterActiveTask,
        addTask: (value: ITask) => {
            dispatch({
                type: ActionContextType.ADD_TASK,
                payload: value,
            });
        },
        // показ и скрытие модального окна
        showPopup: (value: ITodoListContext['popupWindow']) => {
            dispatch({
                type: ActionContextType.SET_SHOW_POPUP,
                payload: value,
            });
        },
        // показ и скрытие панели задач
        showDeskTask: (value: ITodoListContext['taskWindow']) => {
            dispatch({
                type: ActionContextType.SET_SHOW_DESK_TASK,
                payload: value,
            });
        },
        // отчиска выполненных задач
        clearCompliteTask: () => {
            dispatch({
                type: ActionContextType.CLEAR_COMPLITE_TASKS,
            });
        },
        // смена статуса задачи
        changeStatusTask: (id: string, value: boolean) => {
            dispatch({
                type: ActionContextType.SET_STATUS_TASK,
                payload: { id, value },
            });
        },
        setActiveFilter: (value: ITodoListContext['activeFilter']) => {
            dispatch({
                type: ActionContextType.SET_FILTER,
                payload: value,
            });
        },
        // установка фильтра по тексту задачи
        setFilterByName: (value: string) => {
            dispatch({
                type: ActionContextType.SET_FILTER_BY_NAME,
                payload: value,
            });
        },
        // метод объединения задач из localStorage c контекстом
        mergeTaskWithTaskFromLocalStorage: (value: IAllTask) => {
            dispatch({
                type: ActionContextType.SET_TASKS,
                payload: value,
            });
        },
    };

    return (
        <TodoListContext.Provider value={value}>
            {children}
        </TodoListContext.Provider>
    );
};
