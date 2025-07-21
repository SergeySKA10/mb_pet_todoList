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
        default:
            return state;
    }
}
