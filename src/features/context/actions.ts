import type { ITodoListContext } from '@/shared/context/contextShared';

export enum ActionContextType {
    SET_SHOW_POPUP = 'SET_SHOW_POPUP',
}

export type TodoListAction = {
    type: ActionContextType.SET_SHOW_POPUP;
    payload: ITodoListContext['popupWindow'];
};
