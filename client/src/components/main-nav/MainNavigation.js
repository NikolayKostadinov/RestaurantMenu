import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import FirstNavigation from "./FirstNavigation";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
    const {user, isAuthenticated} = useAuthContext();
    return (
        <>
            <FirstNavigation />
            <nav className="nav-second navbar custom-navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
                <div className="container">
                    <button
                        className="navbar-toggler ml-auto"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Начало
                                </NavLink>
                            </li>
                            {isAuthenticated
                                ? <> <li className="nav-item">
                                    <NavLink className="nav-link" to="/management">
                                        Управление
                                    </NavLink>
                                </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/reservations">
                                            Резервации
                                        </NavLink>
                                    </li>
                                </>
                                : null
                            }
                        </ul>
                        {isAuthenticated
                            ? <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    {/* <a href="components.html" className={`btn btn-sm text-primary ${styles.profile}`}> */}
                                       <p className={`text-primary ${styles.profile}`}><i className="fa-regular fa-circle-user"></i> {user.fullname}</p>
                                    {/* </a> */}
                                </li>
                                <li className="nav-item">
                                    <Link to="/logout" className="btn btn-primary btn-sm ml-4">
                                        <i className="fa-solid fa-arrow-right-to-bracket"></i> Изход
                                    </Link>
                                </li>.

                            </ul>
                            : <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to="/login" className="btn btn-primary btn-sm ">
                                        <i className="fa-solid fa-arrow-right-to-bracket"></i> Вход
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className="btn btn-primary btn-sm btn-round ml-4">
                                        <i className="fa-solid fa-registered"></i> Регистрация
                                    </Link>
                                </li>
                            </ul>
                        }

                    </div>
                </div>
            </nav>
        </>
    )
}
export default MainNavigation;