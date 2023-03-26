import {BrowserRouter, MemoryRouter, Route, Routes} from 'react-router-dom';
import React, {useState as useStateMock} from 'react';
import {cleanup, createEvent, fireEvent, render, screen} from "@testing-library/react";
import {AlertContext} from "../../contexts/AlertContext.js";
import {AuthContext} from "../../contexts/AuthContext.js";
import Login from "./Login.js";

describe('Login component Tests Suit', function () {


    const userLogin = jest.fn();
    beforeEach(() => {
            cleanup();
            render(
                <AuthContext.Provider value={{userLogin}}>
                    <AlertContext.Provider
                        value={{
                            showAlert: jest.fn(),
                            setShowAlert: jest.fn(),
                            setAlertMessage: jest.fn(),
                            setAlertType: jest.fn(),
                            showLoading: jest.fn(),
                            hideLoading: jest.fn()}}
                    >
                    <MemoryRouter initialEntries={["/currentUri"]}>
                        <Routes>
                            // dummy route
                            <Route path="/*" element={<Login/>}/>
                        </Routes>
                    </MemoryRouter>
                    </AlertContext.Provider>
                </AuthContext.Provider>
            )
        }
    );

    test('Login form shows', async () => {
        // act
        const heading = await screen.findByText('Вход в системата');
        const userNameInput = document.getElementById('username')
        const passWordInput = document.getElementById('password');

        // assert
        expect(heading).toBeInTheDocument();
        expect(userNameInput).toBeInTheDocument();
        expect(passWordInput).toBeInTheDocument();
        expect(passWordInput).toHaveAttribute('type', 'password');
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
                json: () => Promise.resolve({
                    username: 'username',
                    firstname: 'Fname',
                    lastname: 'Lname'
                })
            })
        );

        const userNameInput = document.getElementById('username');
        const passwordInput = document.getElementById('password');

        fireEvent.change(userNameInput,
            createEvent('input', userNameInput, {
                target: {value: 'user'},
            }));
        fireEvent.change(passwordInput,
            createEvent('input', passwordInput, {
                target: {value: 'password'},
            }));

        const form = document.querySelector('form');

        // act
        fireEvent.submit(form);

        const name = await screen.findByText('Fname Lname');

        //assert
        expect(name).toBeInTheDocument();

    })
});
