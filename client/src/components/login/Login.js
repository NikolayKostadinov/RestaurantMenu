import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import styles from './Login.module.css';

import * as authService from "../../services/authService";
import { useAlertContext } from "../../contexts/AlertContext";
import { getFormControlClass, hasError } from "../common/utils.js";

const Login = () => {
    const [errors, setError] = useState([]);
    const [formState, setFormState] = useState({ username: '', password: '' });
    const authContext = useAuthContext();
    const alertContext = useAlertContext();
    const navigate = useNavigate();

    function requiredValidator(e) {
        addErrorState(e.target.name,
            formState[e.target.name].length < 1);
    }

    function addErrorState(field, errorState) {
        setError(err => ({
            ...err,
            [field]: errorState
        }));
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        alertContext.setShowAlert(false);
        if (!hasError(errors)) {
            console.log('no errors!');
            authService.login(formState.username, formState.password)
                .then(authData => {
                    authContext.userLogin(authData);
                    navigate('/');
                })
                .catch((err) => {
                    if (err.code && (err.code === 401 || err.code === 403)) {
                        alertContext.showAlert('Невалидно потребителско име или парола', 'danger');
                    } else {
                        alertContext.showAlert('Неуспешна операция', 'danger');
                    }
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

    return (
        <section id="login-page" className= "transparent extended">
            <div className="overlay extended">
                <div className="container">
                    <form className={styles.login} onSubmit={onSubmit} autoComplete="new-password">
                        <div className="brand-logo" />
                        <h1 className="mb-4">Вход в системата</h1>
                        <div className="form-group">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className={getFormControlClass(errors.username)}
                                placeholder="Потребител"
                                onChange={onChange}
                                onBlur={requiredValidator}
                            />
                            {errors.username &&
                                <p className="invalid-feedback">
                                    Полето потребител е задължително!
                                </p>
                            }
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                id="login-password"
                                name="password"
                                className={getFormControlClass(errors.password)}
                                placeholder="Парола"
                                onChange={onChange}
                                onBlur={requiredValidator}
                                value={formState.name}
                            />
                            {errors.password &&
                                <p className="invalid-feedback">
                                    Полето парола е задължително!
                                </p>
                            }
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary" disabled = {hasError(errors)}>Вход</button>
                        </div>
                        <p className="mt-2 mb-0">
                            <span>
                                Ако нямате профил можете да се регистрирате <Link to="/register">тук</Link>
                            </span>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
export default Login;