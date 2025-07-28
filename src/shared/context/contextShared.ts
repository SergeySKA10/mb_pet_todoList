type StatusTask = 'active' | 'complete';

export interface ITask {
    id: string;
    text: string;
    status: StatusTask;
}

export interface IAllTask {
    [key: string]: ITask;
}

export type ActiveFilter = 'all' | 'active' | 'complete';

interface ITabFilter {
    id: ActiveFilter;
    text: string;
}

type ActiveDisplayOnElement = 'show' | 'hide';

export interface IInitialStateContext {
    task: Partial<IAllTask>;
    taskWindow: ActiveDisplayOnElement;
    popupWindow: ActiveDisplayOnElement;
    counterActiveTask: number;
    filters: ITabFilter[];
    activeFilter: ActiveFilter;
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
    setActiveFilter: (value: ActiveFilter) => void;
    setFilterByName: (value: string) => void;
    mergeTaskWithTaskFromLocalStorage: (value: IAllTask) => void;
}
