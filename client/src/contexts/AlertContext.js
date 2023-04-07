import {createContext, useContext, useState} from "react";

// Initialize create context to have intellisense where you use it
export const AlertContext = createContext({
    show: false,
    type: 'success',
    message: '',
    showAlert: {},
    setShowAlert: {},
    setAlertMessage: {},
    setAlertType: {},
    showLoading: {},
    hideLoading: {}
});

export const useAlertContext = () => useContext(AlertContext);

export const AlertProvider = ({
                                  children
                              }) => {
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [type, setType] = useState('success');
    const [message, setMessage] = useState('');

    const setShowAlert = (shows) => {
        setShow(shows);
    };
    const setAlertMessage = (message) => {
        setMessage(message);
    };
    const setAlertType = (type) => {
        setType(type)
    };

    const showAlert = (message, type, isAutohide = false) => {
        setMessage(message);
        setType(type || 'success');
        setShow(true);
        if (isAutohide) {
            setTimeout(() => {
                setShow(false);
            }, 3000);
        }
    }

    const showLoading = () => {
        setLoading(true);
    }

    const hideLoading = () => {
        setLoading(false);
    }

    return (
        <AlertContext.Provider value={{
            show,
            loading,
            type,
            message,
            showAlert,
            setShowAlert,
            setAlertMessage,
            setAlertType,
            showLoading,
            hideLoading
        }}>
            {children}
        </AlertContext.Provider>
    )
}
