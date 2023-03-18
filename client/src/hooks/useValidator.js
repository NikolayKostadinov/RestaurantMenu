import { useState } from "react";

const useValidator = () => {
    const [errors, setErrors] = useState([]);

    const getFormControlValidClass = (name, isSmall) => `form-control ${isSmall ? 'form-control-sm' : null} ${errors[name] ? 'is-invalid' : null}`;

    const hasErrors = () => Object.values(errors).some(x => x);

    const requiredValidator = (e) => {
        addErrorState(e.target.name,
            e.target.value?.length < 1);
    }

    const positivValidator = (e) => {
        addErrorState(e.target.name,
            Number(e.target?.value) <= 0);
    }

    const clearErrors = ()=>{
        setErrors([]);
    }

    const addErrorState = (field, errorState) => {
        setErrors(err => ({
            ...err,
            [field]: errorState
        }));
    }

    return ({clearErrors, hasErrors, getFormControlValidClass, requiredValidator, positivValidator})
}


export default useValidator;