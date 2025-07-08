import { CounterTask } from '../ui/CounterTask/CounterTask';
import { Filters } from '../Filters/Filters';
import { ClearTaskButton } from '../ui/ClearTaskButton/ClearTaskButton';
import './FooterTaskBlock.scss';

export const FooterTaskBlock = () => {
    return (
        <article className="footer">
            <CounterTask />
            <Filters />
            <ClearTaskButton />
        </article>
    );
};
