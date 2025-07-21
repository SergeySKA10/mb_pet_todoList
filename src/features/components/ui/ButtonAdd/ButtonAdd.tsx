import type { IButtonProps } from '@/shared/components/Button/buttonTaskShared';
import './ButtonAdd.scss';

export const Button = ({ type }: IButtonProps) => {
    console.log(type);
    return (
        <div className="createBtn">
            <button className="buttonAdd" data-type="type">
                Создать событие
            </button>
        </div>
    );
};
