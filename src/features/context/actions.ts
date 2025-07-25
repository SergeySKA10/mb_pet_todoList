import type { ITodoListContext, ITask } from '@/shared/context/contextShared';

export enum ActionContextType {
    SET_SHOW_POPUP = 'SET_SHOW_POPUP',
    SET_SHOW_DESK_TASK = 'SET_SHOW_DESK_TASK',
    ADD_TASK = 'ADD_TASK',
    SET_STATUS_TASK = 'SET_STATUS_TASK',
    CLEAR_COMPLITE_TASKS = 'CLEAR_COMPLITE_TASKS',
    SET_FILTER = 'SET_FILTER',
    SET_FILTER_BY_NAME = 'SET_FILTER_BY_NAME',
    CHANGE_COUNTER_TASK = 'CHANGE_COUNTER_TASK',
}

export type TodoListAction =
    | {
          type: ActionContextType.SET_SHOW_POPUP;
          payload: ITodoListContext['popupWindow'];
      }
    | {
          type: ActionContextType.SET_SHOW_DESK_TASK;
          payload: ITodoListContext['taskWindow'];
      }
    | {
          type: ActionContextType.ADD_TASK;
          payload: ITask;
      }
    | {
          type: ActionContextType.CLEAR_COMPLITE_TASKS;
      }
    | {
          type: ActionContextType.SET_FILTER;
          payload: ITodoListContext['filter'];
      }
    | {
          type: ActionContextType.SET_FILTER_BY_NAME;
          payload: ITodoListContext['filterByName'];
      }
    | {
          type: ActionContextType.SET_STATUS_TASK;
          payload: { id: string; value: boolean };
      };
