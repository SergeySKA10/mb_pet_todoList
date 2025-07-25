'use client';

import { createContext, useReducer } from 'react';
import reducer from './reducer';
import { ActionContextType } from './actions';
import type {
    IInitialStateContext,
    IProviderProps,
    ITodoListContext,
    ITask,
} from '@/shared/context/contextShared';

const initialStateContext: IInitialStateContext = {
    task: {},
    taskWindow: 'show',
    popupWindow: 'hide',
    counterActiveTask: 0,
    filter: 'all',
    filterByName: '',
};

export const TodoListContext = createContext<ITodoListContext>({
    task: initialStateContext.task,
    taskWindow: initialStateContext.taskWindow,
    popupWindow: initialStateContext.popupWindow,
    filter: initialStateContext.filter,
    filterByName: initialStateContext.filterByName,
    counterActiveTask: initialStateContext.counterActiveTask,
    addTask: () => {},
    showPopup: () => {},
    showDeskTask: () => {},
    clearCompliteTask: () => {},
    changeStatusTask: () => {},
    setFilter: () => {},
    setFilterByName: () => {},
});

export const TodoListContextProvider = ({ children }: IProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialStateContext);

    const value: ITodoListContext = {
        task: state.task,
        popupWindow: state.popupWindow,
        taskWindow: state.taskWindow,
        filter: state.filter,
        filterByName: state.filterByName,
        counterActiveTask: state.counterActiveTask,
        addTask: (value: ITask) => {
            dispatch({
                type: ActionContextType.ADD_TASK,
                payload: value,
            });
        },
        showPopup: (value: ITodoListContext['popupWindow']) => {
            dispatch({
                type: ActionContextType.SET_SHOW_POPUP,
                payload: value,
            });
        },
        showDeskTask: (value: ITodoListContext['taskWindow']) => {
            dispatch({
                type: ActionContextType.SET_SHOW_DESK_TASK,
                payload: value,
            });
        },
        clearCompliteTask: () => {
            dispatch({
                type: ActionContextType.CLEAR_COMPLITE_TASKS,
            });
        },
        changeStatusTask: (id: string, value: boolean) => {
            dispatch({
                type: ActionContextType.SET_STATUS_TASK,
                payload: { id, value },
            });
        },
        setFilter: (value: ITodoListContext['filter']) => {
            dispatch({
                type: ActionContextType.SET_FILTER,
                payload: value,
            });
        },
        setFilterByName: (value: string) => {
            dispatch({
                type: ActionContextType.SET_FILTER_BY_NAME,
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
