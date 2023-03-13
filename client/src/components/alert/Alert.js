import { useState } from "react";
import { useAlertContext } from "../../contexts/AlertContext";

import styles from './Alert.module.css';
const Alert = () => {
    const { show, type, message, setShowAlert } = useAlertContext();
    const [isShown, setState] = useState(true);

    const removeItFromDOM = () => {
        setState(isShown);
    }

    const onClickHandler = () => {
        setShowAlert(false);
        console.log('has to be closed!');
    }

    console.log('show', show, 'isShown', isShown);

    if (!isShown) return null;
    return (
        <div
            className={`alert alert-${type || "success"} alert-dismissible fade ${show ? 'show' : ''} ${styles.over}`}
            role="alert"
            onTransitionEnd={removeItFromDOM}>
            {message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onClickHandler}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}
export default Alert;