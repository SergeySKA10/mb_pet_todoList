import { Button } from '../ButtonAdd/ButtonAdd';
import './Popup.scss';

export const Popup = () => {
    return (
        <section className="popup">
            <div className="popup__window">
                <form>
                    <span className="popup__close"></span>
                    <textarea
                        className="popup__task"
                        name="text"
                        id="text_task"
                        placeholder="Опишите вашу задачу"
                    ></textarea>
                    <Button type="add_task" />
                </form>
            </div>
        </section>
    );
};
