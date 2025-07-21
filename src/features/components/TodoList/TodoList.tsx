import { InputField } from '../InputField/InputField';
import { TaskField } from '../TaskField/TaskField';
import { FooterTaskBlock } from '../FooterTaskBlock/FooterTaskBlock';
import { ButtonOpenPopup } from '../ui/Buttons/ButtonOpenPopup';
import './TodoList.scss';

export const TodoList = () => {
    return (
        <article className="todoList">
            <InputField />
            <TaskField />
            <FooterTaskBlock />
            <ButtonOpenPopup />
        </article>
    );
};
