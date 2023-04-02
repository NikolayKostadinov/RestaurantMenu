import {cleanup, render, screen} from "@testing-library/react";
import {clear} from "@testing-library/user-event/dist/clear.js";
import {MemoryRouter, Route, Routes} from "react-router-dom";
import {AuthContext} from "../../contexts/AuthContext.js";
import MainNavigation from "./MainNavigation.js";

describe('MainNavigation component tests', () => {
    beforeEach(() => {
        cleanup();
    });

    test('MainNavigation show login and register if user not authenticated', async () => {
        // arrange
        render(
            <AuthContext.Provider value={{
                isAuthenticated: false
            }}
            >
                <MemoryRouter initialEntries={["/currentUri"]}>
                    <MainNavigation/>
                    <Routes>
                        // dummy route
                        <Route path="/*" element={<p>User is authenticated</p>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // act
        let home = await screen.queryByText("Начало");
        let login = await screen.queryByText("Вход");
        let register = await screen.queryByText("Регистрация");
        const logout = await screen.queryByText("Изход");

        // assert
        expect(home).toBeInTheDocument();
        expect(login).toBeInTheDocument();
        expect(register).toBeInTheDocument();
        expect(logout).toBeNull();
    });

    test('MainNavigation show contain home link', async () => {
        render(
            <AuthContext.Provider value={{
                user: {firstname: "Fname", lastname: "Lname", fullname: "Fname Lname"},
                isAuthenticated: true
            }}
            >
                <MemoryRouter initialEntries={["/currentUri"]}>
                    <MainNavigation/>
                    <Routes>
                        // dummy route
                        <Route path="/*" element={<p>User is authenticated</p>}/>
                    </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        // act
        let home = await screen.queryByText("Начало");
        let manage = await screen.queryByText("Управление");
        let reservations = await screen.queryByText("Резервации");
        let fullname = await screen.queryByText("Fname Lname");
        let login = await screen.queryByText("Вход");
        let register = await screen.queryByText("Регистрация");
        const logout = await screen.queryByText("Изход");

        // assert
        expect(home).toBeInTheDocument();
        expect(manage).toBeInTheDocument();
        expect(reservations).toBeInTheDocument();
        expect(fullname).toBeInTheDocument();
        expect(login).toBeNull();
        expect(register).toBeNull();
        expect(logout).toBeInTheDocument();
    });
});
