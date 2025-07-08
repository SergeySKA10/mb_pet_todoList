import { Input } from '../ui/Input/Input';
import { ArrowButtonInput } from '../ui/ArrowButtonInput/ArrowButtonInput';
import './InputField.scss';

export const InputField = () => {
    return (
        <div className="inputField">
            <ArrowButtonInput />
            <Input />
        </div>
    );
};
