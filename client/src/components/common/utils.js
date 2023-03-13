export const getFormControlClass = (error) => `form-control ${error ? 'is-invalid' : null}`;
export const hasError = (errors) => Object.values(errors).some(x => x);