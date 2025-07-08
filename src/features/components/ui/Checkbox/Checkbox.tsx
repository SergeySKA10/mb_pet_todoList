import './Checkbox.scss';

export const Checkbox = ({ complete }: { complete: boolean }) => {
    const display = complete ? 'block' : 'none';
    return (
        <button className="checkbox">
            <span style={{ display: display }}></span>
        </button>
    );
};
