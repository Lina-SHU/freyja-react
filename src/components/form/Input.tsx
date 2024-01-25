import { InputType } from "../../types/form";

const Input = ({type, id, label, placeholder, register, errors, rules}: InputType) => {
    return (<>
        <div className="mb-4">
            <label htmlFor={id} className="form-label fs-subtitle fs-lg-title fw-bold mb-2">{label}</label>
            <input
                type={type}
                className={`form-control bg-white text-dark p-4 ${errors[id as keyof typeof errors] ? 'is-invalid' : ''}`}
                id={id}
                placeholder={placeholder}
                { ...register(id, rules) }
            />
            {
                errors?.[id as keyof typeof errors] && <div className="invalid-feedback">{ errors?.[id as keyof typeof errors]?.['message'] }</div>
            }
        </div>
    </>)
};

export default Input;