import { CheckboxType } from "../../types/type";

const Checkbox = ({id, label}: CheckboxType) => {
    return (<>
        <div className="form-check d-flex align-items-center">
            <input
                className="form-check-input bg-primary mt-0"
                type="checkbox"
                id={id}
                style={{ width: '24px', height: '24px', marginRight: '6px' }}
            />
            <label className="form-check-label fs-body2 fs-lg-body" htmlFor={id}>
                {label}
            </label>
        </div>
    </>)
};

export default Checkbox;