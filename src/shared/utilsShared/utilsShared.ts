import type { IAllTask } from '../context/contextShared';

export type FilterTask = (filter: string, task: IAllTask) => IAllTask;
