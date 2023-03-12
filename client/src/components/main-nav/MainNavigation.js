import { NavLink } from "react-router-dom";
import FirstNavigation from "./FirstNavigation";

import styles from "./MainNavigation.module.css";

const MainNavigation = () => {
    const { user } = { user: { fullName: 'Nikolay Kostadinov' } };
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
                            {user
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
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/menu">
                                    Меню
                                </NavLink>
                            </li>
                        </ul>
                        {user
                            ? <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a href="components.html" className={`btn btn-sm text-primary ${styles.profile}`}>
                                        <i className="fa-regular fa-circle-user"></i> {user.fullName}
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="components.html" className="btn btn-primary btn-sm ml-4 ">
                                        <i className="fa-solid fa-arrow-right-to-bracket"></i> Изход
                                    </a>
                                </li>.

                            </ul>
                            : <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a href="components.html" className="btn btn-primary btn-sm ">
                                        <i className="fa-solid fa-arrow-right-to-bracket"></i> Вход
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="components.html" className="btn btn-primary btn-sm btn-round ml-4">
                                        <i className="fa-solid fa-registered"></i> Регистрация
                                    </a>
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