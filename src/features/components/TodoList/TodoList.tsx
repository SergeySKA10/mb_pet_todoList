import { InputField } from '../InputField/InputField';
import { TaskField } from '../TaskField/TaskField';
import './TodoList.scss';

export const TodoList = () => {
    return (
        <article className="todoList">
            <InputField />
            <TaskField />
        </article>
    );
};
