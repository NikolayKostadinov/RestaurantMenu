import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAlertContext } from "../../contexts/AlertContext";
import { useAuthContext } from "../../contexts/AuthContext";

import * as authService from "../../services/authService";
import { getFormControlClass, hasError } from "../common/utils.js";

import styles from './Register.module.css';

const Register = () => {
    const alertContext = useAlertContext();
    const [errors, setError] = useState([]);
    const [formState, setFormState] = useState(
        {
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            repass:''
        });

    const { userLogin } = useAuthContext()
    const navigate = useNavigate();

    const onSubmit = (ev) => {
        ev.preventDefault();
        alertContext.setShowAlert(false);
        if (!hasError(errors)) {
            authService.register(formState)
                .then(authData => {
                    userLogin(authData);
                    alertContext.showAlert('Вие се регистрирахте успешно в системата!', 'success', true);
                    navigate('/');
                })
                .catch(err => {
                    let message = "Възникна грешка при рагистрация!";
                    if(err.message){
                        message = (<><strong>Възникна грешка при рагистрация!</strong> "{err.message||''}"</>);
                    }
                    alertContext.showAlert(message, 'danger');
                })
        }
    }

    const onChange = (ev) => {
        setFormState(state =>
        ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }


    function minLenghtValidator(e, minLenght) {
        addErrorState(e.target.name,
            formState[e.target.name].length < minLenght);
    }

    function requiredValidator(e) {
        addErrorState(e.target.name,
            formState[e.target.name].length < 1);
    }

    function samePasswordsValidator(e) {
        addErrorState(e.target.name, formState.password !== formState.repass);
    }

    function addErrorState(field, errorState) {
        setError(err => ({
            ...err,
            [field]: errorState
        }));
    }

    function emailValidator(e) {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        let isValid = formState[e.target.name].match(validRegex);
        addErrorState(e.target.name, !isValid);
    }


    return (
        <section id="register-page" className="transparent">
            <div className="overlay">
                <div className="container">
                    <form className={styles.register} onSubmit={onSubmit}>
                        <h1 className="mb-4">Регистрация</h1>
                        <div className="form-group">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className={getFormControlClass(errors.username)}
                                placeholder="Потребител"
                                onChange={onChange}
                                onBlur={(e) => { minLenghtValidator(e, 3) }}
                                value={formState.username}
                            />
                            {errors.username &&
                                <p className="invalid-feedback">
                                    Потребителското име требва да бъде поне 3 символа!
                                </p>
                            }
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                className={getFormControlClass(errors.firstname)}
                                placeholder="Име"
                                onChange={onChange}
                                onBlur={(e) => { minLenghtValidator(e, 2) }}
                                value={formState.firstname}
                            />
                            {errors.firstname &&
                                <p className="invalid-feedback">
                                    Името требва да бъде поне 2 символа!
                                </p>
                            }
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                className={getFormControlClass(errors.lastname)}
                                placeholder="Фамилия"
                                onChange={onChange}
                                onBlur={(e) => { minLenghtValidator(e, 3) }}
                                value={formState.lastname}
                            />
                            {errors.lastname &&
                                <p className="invalid-feedback">
                                    Фамилията трябва да бъде поне 3 символа!
                                </p>
                            }
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className={getFormControlClass(errors.email)}
                                placeholder="maria@email.com"
                                onChange={onChange}
                                onBlur={emailValidator}
                                value={formState.email}
                            />
                            {errors.email &&
                                <p className="invalid-feedback">
                                    Невалидна електронна поща!
                                </p>
                            }
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                id="register-password"
                                className={getFormControlClass(errors.password)}
                                placeholder="Парола"
                                onChange={onChange}
                                onBlur={requiredValidator}
                                value={formState.password}
                            />
                            {errors.password &&
                                <p className="invalid-feedback">
                                    Въвеждането на парола е задължително!
                                </p>
                            }
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                name="repass"
                                id="confirm-password"
                                className={getFormControlClass(errors.repass)}
                                placeholder="Повторете паролата"
                                onChange={onChange}
                                onBlur={samePasswordsValidator}
                                value={formState.repass}
                            />
                            {errors.repass &&
                                <p className="invalid-feedback">
                                    Паролите трябва да бъдат еднакви!
                                </p>
                            }
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit"
                                className="btn btn-primary"
                                disabled={hasError(errors)}
                                >
                                Регистрация
                                </button>
                        </div>
                        <p className="mt-2 mb-0">
                            <span>
                                Ако сте регистриран можете да влезете от <Link to="/login">тук.</Link>
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default Register;