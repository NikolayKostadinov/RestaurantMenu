import {useEffect, useState} from "react";
import { useAlertContext } from "../../../contexts/AlertContext";

import styles from './Alert.module.css';
const Alert = () => {
    const { show, type, message, setShowAlert } = useAlertContext();
    const [isShown, setState] = useState(true);

    useEffect(()=>{
        setState(show);
    },[show]);

    const removeItFromDOM = () => {
        if (show){
            setState(true);
        } else {
            setState(false);
        }
    }

    const onClickHandler = () => {
        setShowAlert(false);
        setState(false);
    }

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
