import {cleanup, fireEvent, render, screen} from "@testing-library/react";
import {act} from "react-dom/test-utils";
import {AlertContext} from "../../../contexts/AlertContext.js";
import Alert from "./Alert.js";

const setShowAlert = jest.fn()
describe('Alert Component Visible Tests Suit', function () {
    beforeEach(() => {
            render(
                <AlertContext.Provider value={{
                    show: true,
                    type: 'danger',
                    message: 'Mock Message',
                    setShowAlert
                }}>
                    <Alert/>
                </AlertContext.Provider>
            );
        }
    );

    test('Alert must be visible', async () => {
        // act
        const alert = await screen.findByRole('alert');

        // assert
        expect(alert).toBeInTheDocument();
    })

    test('Alert display correct message', async () => {
        // act
        const message = await screen.findByText('Mock Message');

        // assert
        expect(message).toBeInTheDocument();
    })

    test('Alert correct type', async () => {
        // act
        const alert = await screen.findByRole('alert');
        // assert
        expect(alert).toHaveClass('alert-danger');
    })

    test('Alert will invoke setShowAlert on close click', async () => {
        const button = document.querySelector("button.close");
        expect(button.innerHTML).toBe('<span aria-hidden="true">×</span>');

        act(() => {
            button.dispatchEvent(new MouseEvent("click", {bubbles: true}));
        });

        expect(setShowAlert).toHaveBeenCalledTimes(1);
    })

    test('Alert will invoke removeItFromDOM', async () => {
        const div = document.querySelector("div.alert");

        fireEvent.transitionEnd(screen.getByRole('alert'));

        const message = await screen.findByText('Mock Message');

        expect(message).toBeInTheDocument();
    })

    test('Alert will not show', async () => {
        cleanup();
        render(
            <AlertContext.Provider value={{
                show: false,
                type: 'danger',
                message: 'Mock Message',
                setShowAlert,
            }}>
                <Alert/>
            </AlertContext.Provider>
        );

        const alert = await screen.findByRole('alert');

        expect(alert).not.toHaveClass('show');
    })
});
