type StatusTask = 'active' | 'complite';

interface ITask {
    id: string;
    name: string;
    status: StatusTask;
}

type ActiveDisplayOnElement = 'show' | 'hide';

export interface IInitialStateContext {
    taskActive: ITask[];
    taskComplite: ITask[];
    taskWindow: ActiveDisplayOnElement;
    popupWindow: ActiveDisplayOnElement;
}

export interface IProviderProps {
    children: React.ReactNode;
}

export interface ITodoListContext extends IInitialStateContext {
    // addTask: () => void;
    showPopup: (value: ActiveDisplayOnElement) => void;
}
