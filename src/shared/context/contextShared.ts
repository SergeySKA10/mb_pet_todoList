type StatusTask = 'active' | 'complite';

export interface ITask {
    id: string;
    name: string;
    status: StatusTask;
}

type ActiveDisplayOnElement = 'show' | 'hide';
type ActiveFilter = 'all' | 'active' | 'complite';

export interface IInitialStateContext {
    task: ITask[];
    taskWindow: ActiveDisplayOnElement;
    popupWindow: ActiveDisplayOnElement;
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
    changeStatusTask: (id: string) => void;
    setFilter: (value: ActiveFilter) => void;
    setFilterByName: (value: string) => void;
}
