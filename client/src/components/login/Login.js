import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import styles from './Login.module.css';

import * as authService from "../../services/authService";

const Login = () => {
    const [errors, setError] = useState([]);
    const [formState, setFormState] = useState({ username: '', password: '' });
    const authContext = useAuthContext();
    const navigate = useNavigate();

    function requiredValidator(e, minLenght) {
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
        if (Object.values(errors).every(v => !v)) {
            authService.login(formState.username, formState.password)
                .then(authData => {
                    authContext.userLogin(authData);
                    navigate('/');
                })
                .catch(() => {
                    navigate('/')
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
        <section id="login-page" className="transparent">
            <div className="overlay">
                <div className="container">
                    <form className={styles.login} onSubmit={onSubmit} autoComplete="new-password">
                        <div className="brand-logo" />
                        <h1 className="mb-4">Вход в системата</h1>
                        <div className="form-group">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="form-control"
                                placeholder="Потребител"
                                onChange={onChange}
                                onBlur={requiredValidator}
                                value={formState.username}
                            />
                            {errors.username &&
                                <p className="text-danger font-weight-bold ml-4 mt-2">
                                    Полето потребител е задължително!
                                </p>
                            }
                        </div>
                        <div className="form-group">
                        <input
                            type="password"
                            id="login-password"
                            name="password"
                            className="form-control"
                            placeholder="Парола"
                            onChange={onChange}
                            onBlur={requiredValidator}
                            value={formState.name}
                        />
                        {errors.password &&
                            <p className="text-danger font-weight-bold ml-4 mt-2">
                                Полето парола е задължително!
                            </p>
                        }
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary">Вход</button>
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