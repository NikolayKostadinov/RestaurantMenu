import { useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import { getFormControlClass, hasError } from "../../common/utils.js";
import { storage } from "../../../services/utils/firebase"
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid';
import { useAlertContext } from "../../../contexts/AlertContext";


const MealListItem = ({
    meal,
    onDeleteHandler,
    onUpdateHandler
}) => {
    const [errors, setError] = useState([]);
    const [isEdit, setIsEdit] = useState(false);
    const [formState, setFormState] = useState({ ...meal });

    const userContext = useAuthContext();
    const alertContext = useAlertContext();

    const onChange = (ev) => {
        setFormState(state =>
        ({
            ...state,
            [ev.target.name]: ev.target.value
        }));
    }

    const onCancel = () => {
        setFormState({ ...meal });
        setError([]);
        setIsEdit(false);
    }

    const onSubmit = () => {
        if (!hasError(errors)) {
            onUpdateHandler(formState);
            setIsEdit(false);
        }
    }

    function requiredValidator(e) {
        addErrorState(e.target.name,
            formState[e.target.name].length < 1);
    }

    function positivValidator(e) {
        addErrorState(e.target.name,
            Number(formState[e.target.name].length) <= 0);
    }

    function addErrorState(field, errorState) {
        setError(err => ({
            ...err,
            [field]: errorState
        }));
    }

    const prepareFile = (event) => {
        uploadFile(event.target.files[0])
    }

    const uploadFile = (file) => {
        if (file == null) return;
        const imageRef = ref(storage, `meals/${file.name + v4()}`);
        uploadBytes(imageRef, file)
            .then((snapshot) => {
                getDownloadURL(snapshot.ref).then(
                    url => {
                        setFormState(state =>
                        ({
                            ...state,
                            imageUrl: url
                        }));
                    });
                alertContext.showAlert('Вие качихте  на изображение!', 'success', true);
            })
            .catch(err => {
                console.log(err);
                alertContext.showAlert('Неуспешно качване на изображение!', 'danger');
            })
            ;
    };

    return (isEdit 
        ?
        <div className="col-md-6 mb-4">
            <form onSubmit={onSubmit}>
                <div className="custom-list">
                    <div className="img-holder">
                        <img
                            src={formState.imageUrl}
                            className="img-responsive"
                            alt={formState.title}
                        />
                        <input type="file" onChange={prepareFile} />
                    </div>
                    <div className="info">
                        <div className="head clearfix pb-0">
                            <div className="row">
                                <div className="form-group col-sm-9 mb-2">
                                    <input
                                        type="text"
                                        name="title"
                                        className={getFormControlClass(errors.title, true)}
                                        placeholder="Название"
                                        value={formState.title}
                                        onChange={onChange}
                                        onBlur={requiredValidator}
                                    />
                                    {errors.title &&
                                        <p className="invalid-feedback">
                                            Полето название е задължително!
                                        </p>
                                    }
                                </div>
                                <div className="form-group col-sm-3 mb-0">
                                    <input
                                        type="text"
                                        name="price"
                                        className={getFormControlClass(errors.price, true)}
                                        value={formState.price}
                                        onChange={onChange}
                                        onBlur={positivValidator}
                                        placeholder="Цена"
                                    />
                                    {errors.price &&
                                        <p className="invalid-feedback">
                                            Полето цена трябва да е полoжително!
                                        </p>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="form-group my-2">
                            <textarea rows="3"
                                type="text"
                                name="ingredients"
                                className={`w-100 ${getFormControlClass(errors.ingredients, true)}`}
                                value={formState.ingredients}
                                onChange={onChange}
                                onBlur={requiredValidator}
                                placeholder="Съставки"
                            ></textarea>
                            {errors.ingredients &&
                                <p className="invalid-feedback">
                                    Въвеждането на съставки е задължително!
                                </p>
                            }
                        </div>
                        <div className="body pt-0">
                            <div className="meal-management">
                                <button type="submit" className="btn btn-sm btn-primary" disabled={hasError(errors)}>
                                    <i className="fa-solid fa-floppy-disk"></i>
                                </button>
                                <button className="btn btn-sm btn-primary" onClick={onCancel}>
                                    <i className="fa-solid fa-xmark"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
        : <div className="col-md-6 mb-4">
            <div className="custom-list">
                <div className="img-holder">
                    <img
                        src={meal.imageUrl}
                        className="img-responsive"
                        alt={meal.title}
                    />
                </div>
                <div className="info">
                    <div className="head clearfix">
                        <h5 className="title float-left">{meal.title}</h5>
                        <p className="float-right text-primary">{meal.price.toFixed(2)} лв.</p>
                    </div>
                    <div className="body">
                        <p>{meal.ingredients}</p>
                        {userContext.isAuthenticated && userContext.user._id === meal._ownerId &&
                            <div className="meal-management">
                                <button className="btn btn-sm btn-primary" onClick={() => setIsEdit(true)}>
                                    <i className="fa-regular fa-pen-to-square"></i>
                                </button>
                                <button className="btn btn-sm btn-primary" onClick={() => onDeleteHandler(meal._id)}>
                                    <i className="fa-regular fa-trash-can"></i>
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MealListItem;