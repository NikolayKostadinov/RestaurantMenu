import { useEffect } from "react";
import  ReactDOM  from "react-dom";
import { useAlertContext } from "../../contexts/AlertContext";

import styles from './Alert.module.css';
const Alert = () => {
    const { show, type, message, setShowAlert } = useAlertContext();

    const onClickHandler=()=>{
        setShowAlert(false);
        console.log('has to be closed!');
    }

    if (!show) return null;
    return (
        <div className={`alert alert-${type || "success"} alert-dismissible fade show ${styles.over}`} role="alert">
            {message}
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onClickHandler}>
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    ) 
    
    // return ReactDOM.createPortal(
    //     <div className={`alert alert-${type || "success"} alert-dismissible fade show ${styles.over}`} role="alert">
    //         {message}
    //         <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onClickHandler}>
    //             <span aria-hidden="true">&times;</span>
    //         </button>
    //     </div>,
    //     document.getElementById('alert-placehomder')
    // )
}
export default Alert;