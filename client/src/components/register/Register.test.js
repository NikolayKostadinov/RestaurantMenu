import {act, cleanup, createEvent, fireEvent, render, screen} from "@testing-library/react";
import React from 'react';
import {MemoryRouter, Route, Routes} from 'react-router-dom';
import {AlertContext} from "../../contexts/AlertContext.js";
import {AuthContext} from "../../contexts/AuthContext.js";
import Register from "./Register.js";

describe('Login component Tests Suit', function () {

    const userLogin = jest.fn((authData) => {
        console.log(authData)
    });

    const showAlert = jest.fn((authData) => {
        console.log(authData)
    });

    const mockUser = {
        username: 'username',
        firstname: 'Fname',
        lastname: 'Lname',
        email: 'email@test.com',
        password: 'P@ssw0rd',
        repass: 'P@ssw0rd'
    }

    beforeEach(() => {
        cleanup();

         render(
            <AuthContext.Provider value={{userLogin}}>
                <AlertContext.Provider
                    value={{
                        showAlert: showAlert,
                        setShowAlert: jest.fn(),
                        setAlertMessage: jest.fn(),
                        setAlertType: jest.fn(),
                        showLoading: jest.fn(),
                        hideLoading: jest.fn()
                    }}
                >
                    <MemoryRouter initialEntries={["/currentUri"]}>
                        <Routes>
                            // dummy route
                            <Route path="/*" element={<Register/>}/>
                        </Routes>
                    </MemoryRouter>
                </AlertContext.Provider>
            </AuthContext.Provider>
        )
    });

    afterEach(() => {
        cleanup();
        jest.restoreAllMocks();
    });


    test('Register form got all the inputs', async () => {
        // act
        const heading = await screen.findByText('Регистрация');
        const userNameInput = document.getElementById('username');
        const firstNameInput = document.getElementById('firstname');
        const lastNameInput = document.getElementById('lastname');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const repassInput = document.getElementById('confirm-password');

        // assert
        expect(heading).toBeInTheDocument();
        expect(userNameInput).toBeInTheDocument();
        expect(firstNameInput).toBeInTheDocument();
        expect(lastNameInput).toBeInTheDocument();
        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
        expect(passwordInput).toHaveAttribute('type', 'password');
        expect(repassInput).toBeInTheDocument();
        expect(repassInput).toHaveAttribute('type', 'password');
    });

    test('OnChange correct username', async () => {
        const userNameInput = document.getElementById('username')

        // act
        fireEvent.change(userNameInput,
            createEvent('input', userNameInput, {
                target: {value: 'user'},
            }));

        // assert
        expect(userNameInput.value).toBe('user');
    });

    test('OnChange correct password', async () => {
        const passwordNameInput = document.getElementById('password')

        // act
        fireEvent.change(passwordNameInput,
            createEvent('input', passwordNameInput, {
                target: {value: 'password'},
            }));

        // assert
        expect(passwordNameInput.value).toBe('password');
    });

    test('OnBlur not empty username password no error message', async () => {
        const userNameInput = document.getElementById('username')

        // act
        fireEvent.blur(userNameInput,
            createEvent('input', userNameInput, {
                target: {value: 'username'},
            }));

        // assert
        expect(userNameInput).not.toHaveClass('is-invalid');
    });

    test('OnBlur not empty username password show error message', async () => {
        const userNameInput = document.getElementById('username')

        // act
        fireEvent.blur(userNameInput,
            createEvent('input', userNameInput, {
                target: {value: ''},
            }));

        // assert
        expect(userNameInput).toHaveClass('is-invalid');
    });


    test('OnBlur not empty password password no error message', async () => {
        const passwordInput = document.getElementById('password')

        // act
        fireEvent.blur(passwordInput,
            createEvent('input', passwordInput, {
                target: {value: 'P@ssw0rd'},
            }));

        // assert
        expect(passwordInput).not.toHaveClass('is-invalid');
    });

    test('OnBlur empty password password show error message', async () => {
        const passwordInput = document.getElementById('username')

        // act
        fireEvent.blur(passwordInput,
            createEvent('input', passwordInput, {
                target: {value: ''},
            }));

        // assert
        expect(passwordInput).toHaveClass('is-invalid');
    });

    test('Onsubmit correct username and pass show full name', async () => {

        // arrange
        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockUser)
            })
        );

        const userNameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const form = document.querySelector('form');

        // act
        await act(() => {
            fireEvent.change(userNameInput,
                createEvent('input', userNameInput, {
                    target: {value: 'user'},
                }));

            fireEvent.change(passwordInput,
                createEvent('input', passwordInput, {
                    target: {value: 'password'},
                }));

            fireEvent.submit(form);
        });

        //assert
        expect(userLogin).toHaveBeenCalledWith(mockUser);
    })

    test('Onsubmit not correct username or pass show Error', async () => {

        // arrange
        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                status: 403,
                ok: false,
                json: () => Promise.resolve(mockUser)
            })
        );

        const userNameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const form = document.querySelector('form');

        // act
        await act(() => {
            fireEvent.change(userNameInput,
                createEvent('input', userNameInput, {
                    target: {value: 'user'},
                }));

            fireEvent.change(passwordInput,
                createEvent('input', passwordInput, {
                    target: {value: 'password'},
                }));

            fireEvent.submit(form);
        });

        //assert
        expect(showAlert).toHaveBeenCalledWith("Възникна грешка при рагистрация!", "danger");

    });

    test('Onsubmit if has error status show Error', async () => {
        // arrange

        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                status: 400,
                ok: false,
                json: () => Promise.resolve(mockUser)
            })
        );

        const userNameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');
        const form = document.querySelector('form');

        // act
        await act(() => {
            fireEvent.change(userNameInput,
                createEvent('input', userNameInput, {
                    target: {value: 'user'},
                }));

            fireEvent.change(passwordInput,
                createEvent('input', passwordInput, {
                    target: {value: 'password'},
                }));

            fireEvent.submit(form);
        });

        //assert
        expect(showAlert).toHaveBeenCalledWith("Възникна грешка при рагистрация!", "danger");

    })
});
