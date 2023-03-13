import { useState, createContext, useContext } from "react";

// Initialize create context to have intelisense where you use it
export const AlertContext = createContext({ show: false, type: 'success', message: '', showAlert: {}, setShowAlert: {}, setAlertMesage: {}, setAlertType: {} });

export const useAlertContext = () => {
    const context = useContext(AlertContext);
    return context;
}

export const AlertProvider = ({
    children
}) => {
    const [show, setShow] = useState(false);
    const [type, setType] = useState('success');
    const [message, setMessage] = useState('');

    const setShowAlert = (shows) => {
        setShow(shows);
    };
    const setAlertMesage = (message) => {
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
        };
    }


    return (
        <AlertContext.Provider value={{ show, type, message, showAlert, setShowAlert, setAlertMesage, setAlertType }}>
            {children}
        </AlertContext.Provider>
    )
}
