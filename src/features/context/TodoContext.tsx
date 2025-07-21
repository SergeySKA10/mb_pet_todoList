import { createContext, useReducer } from 'react';
import reducer from './reducer';
import { ActionContextType } from './actions';
import type {
    IInitialStateContext,
    IProviderProps,
    ITodoListContext,
} from '@/shared/context/contextShared';

const initialStateContext: IInitialStateContext = {
    taskActive: [],
    taskComplite: [],
    taskWindow: 'show',
    popupWindow: 'hide',
};

export const TodoListContext = createContext<ITodoListContext>({
    taskActive: initialStateContext.taskActive,
    taskComplite: initialStateContext.taskComplite,
    taskWindow: initialStateContext.taskWindow,
    popupWindow: initialStateContext.popupWindow,
    // addTask: () => {},
    showPopup: () => {},
});

export const TodoListContextProvider = ({ children }: IProviderProps) => {
    const [state, dispatch] = useReducer(reducer, initialStateContext);

    const value: ITodoListContext = {
        taskActive: state.taskActive,
        taskComplite: state.taskComplite,
        popupWindow: state.popupWindow,
        taskWindow: state.taskWindow,
        // addTask: () => {},
        showPopup: (value: ITodoListContext['popupWindow']) => {
            dispatch({
                type: ActionContextType.SET_SHOW_POPUP,
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
