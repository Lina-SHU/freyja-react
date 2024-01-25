import { CheckboxType } from "../../types/type";

const Checkbox = ({id, label, register, errors, rules}: CheckboxType) => {
    return (<>
        <div className="form-check d-flex align-items-center">
            <input
                className="form-check-input bg-primary mt-0"
                type="checkbox"
                id={id}
                style={{ width: '24px', height: '24px', marginRight: '6px' }}
                { ...register(id, rules) }
            />
            <label className="form-check-label fs-body2 fs-lg-body" htmlFor={id}>
                {label}
            </label>
            {
                errors?.[id as keyof typeof errors] && <div className="invalid-feedback">{ errors?.[id as keyof typeof errors]?.['message'] }</div>
            }
        </div>
    </>)
};

export default Checkbox;