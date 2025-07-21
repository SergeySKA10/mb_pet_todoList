import { InputField } from '../InputField/InputField';
import { TaskField } from '../TaskField/TaskField';
import { FooterTaskBlock } from '../FooterTaskBlock/FooterTaskBlock';
import { Button } from '../ui/ButtonAdd/ButtonAdd';
import './TodoList.scss';

export const TodoList = () => {
    return (
        <article className="todoList">
            <InputField />
            <TaskField />
            <FooterTaskBlock />
            <Button type="open_modal" />
        </article>
    );
};
