type StatusTask = 'active' | 'complete';

export interface ITask {
    id: string;
    text: string;
    status: StatusTask;
}

export interface IAllTask {
    [key: string]: ITask;
}

type ActiveDisplayOnElement = 'show' | 'hide';
type ActiveFilter = 'all' | 'active' | 'complete';

export interface IInitialStateContext {
    task: Partial<IAllTask>;
    taskWindow: ActiveDisplayOnElement;
    popupWindow: ActiveDisplayOnElement;
    counterActiveTask: number;
    filter: ActiveFilter;
    filterByName: string;
}

export interface IProviderProps {
    children: React.ReactNode;
}

export interface ITodoListContext extends IInitialStateContext {
    addTask: (value: ITask) => void;
    showPopup: (value: ActiveDisplayOnElement) => void;
    showDeskTask: (value: ActiveDisplayOnElement) => void;
    clearCompliteTask: () => void;
    changeStatusTask: (id: string, value: boolean) => void;
    setFilter: (value: ActiveFilter) => void;
    setFilterByName: (value: string) => void;
}
