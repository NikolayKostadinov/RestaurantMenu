import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

import * as authService from "../../services/authService";

import styles from './Register.module.css';

const Register = () => {
    const [errors, setError] = useState([]);
    const [formState, setFormState] = useState(
        {
            username: '',
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        });

    const { userLogin } = useAuthContext()
    const navigate = useNavigate();

    const onSubmit = (ev) => {
        ev.preventDefault();
        if (Object.values(errors).every(v => !v)) {
            authService.register(formState)
                .then(authData => {
                    userLogin(authData);
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
                                className="form-control"
                                placeholder="Потребител"
                                onChange={onChange}
                                onBlur={(e)=>{minLenghtValidator(e,3)}}
                                value={formState.username}
                            />
                            {errors.username &&
                                <p className="text-danger font-weight-bold ml-4 mt-2">
                                    Потребителското име требва да бъде поне 3 символа!
                                </p>
                            }
                        </div>
                        
                        <div className="form-group">
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                className="form-control"
                                placeholder="Име"
                                onChange={onChange}
                                onBlur={(e)=>{minLenghtValidator(e,2)}}
                                value={formState.firstname}
                            />
                            {errors.firstname &&
                                <p className="text-danger font-weight-bold ml-4 mt-2">
                                    Името требва да бъде поне 2 символа!
                                </p>
                            }
                        </div>

                        <div className="form-group">
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                className="form-control"
                                placeholder="Фамилия"
                                onChange={onChange}
                                onBlur={(e)=>{minLenghtValidator(e,3)}}
                                value={formState.lastname}
                            />
                            {errors.lastname &&
                                <p className="text-danger font-weight-bold ml-4 mt-2">
                                    Фамилията трябва да бъде поне 3 символа!
                                </p>
                            }
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="form-control"
                                placeholder="maria@email.com"
                                onChange={onChange}
                                onBlur={emailValidator}
                                value={formState.email}
                            />
                            {errors.email &&
                                <p className="text-danger font-weight-bold ml-4 mt-2">
                                    Невалидна електронна поща!
                                </p>
                            }
                        </div>

                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                id="register-password"
                                className="form-control"
                                placeholder="Парола"
                                onChange={onChange}
                                onBlur={requiredValidator}
                                value={formState.name}
                            />
                            {errors.password &&
                                <p className="text-danger font-weight-bold ml-4 mt-2">
                                    Въвеждането на парола е задължително!
                                </p>
                            }
                        </div>

                        <div className="form-group">
                        <input
                            type="password"
                            name="repass"
                            id="confirm-password"
                            className="form-control"
                            placeholder="Повторете паролата"
                            onChange={onChange}
                            onBlur={samePasswordsValidator}
                            value={formState.name}
                        />
                        {errors.repass &&
                            <p className="text-danger font-weight-bold ml-4 mt-2">
                                Паролите трябва да бъдат еднакви!
                            </p>
                        }
                        </div>
                        <div className="d-flex justify-content-end">
                            <button type="submit" className="btn btn-primary">Регистрация</button>
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