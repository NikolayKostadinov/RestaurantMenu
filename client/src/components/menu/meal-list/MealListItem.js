import { useState } from "react";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useAlertContext } from "../../../contexts/AlertContext";
import useValidator from "../../../hooks/useValidator";
import useUploadImg from "../../../hooks/useUploadImg";

const MealListItem = ({
    meal,
    onDeleteHandler,
    onUpdateHandler
}) => {

    const [isEdit, setIsEdit] = useState(false);
    const [formState, setFormState] = useState({ ...meal });

    const userContext = useAuthContext();
    const validator = useValidator();
    const alertContext = useAlertContext();
    const { uploadImage } = useUploadImg();

    const setResult = (fieldName, value) => {
        setFormState(state =>
        ({
            ...state,
            [fieldName]: value
        }));
        console.log("NewURL: ", value);
    }

    const onChange = (ev) => {
        setResult(ev.target.name, ev.target.value);
    }

    const onCancel = (ev) => {
        ev.preventDefault();
        setFormState({ ...meal });
        validator.clearErrors();
        setIsEdit(false);
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        if (!validator.hasErrors()) {
            onUpdateHandler(formState);
            setIsEdit(false);
        }
    }

    const uploadMealImage = (e) => {
        alertContext.showLoading();
        uploadImage('meals', e)
            .then(url => { setResult('imageUrl', url); })
            .catch(err => {
                console.log(err);
                alertContext.showAlert('Неуспешна операция!', 'danger');
            })
            .finally(() => alertContext.hideLoading());
    }

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
                        <label for="file" class="btn btn-sm btn-primary mt-1 w-100">Промени</label>
                        <input id="file" type="file" accept="image/*" onChange={uploadMealImage} style={{ "display": "none" }} />
                    </div>
                    <div className="info">
                        <div className="head clearfix pb-0">
                            <div className="row">
                                <div className="form-group col-sm-9 mb-2">
                                    <input
                                        type="text"
                                        name="title"
                                        className={validator.getFormControlValidClass("title", true)}
                                        placeholder="Название"
                                        value={formState.title}
                                        onChange={onChange}
                                        onBlur={validator.requiredValidator}
                                    />
                                    <p className="invalid-feedback">
                                        Полето название е задължително!
                                    </p>
                                </div>
                                <div className="form-group col-sm-3 mb-0">
                                    <input
                                        type="text"
                                        name="price"
                                        className={validator.getFormControlValidClass("price", true)}
                                        value={formState.price}
                                        onChange={onChange}
                                        onBlur={validator.positivValidator}
                                        placeholder="Цена"
                                    />
                                    <p className="invalid-feedback">
                                        Полето цена трябва да е полoжително!
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="form-group my-2">
                            <textarea rows="3"
                                type="text"
                                name="ingredients"
                                className={`w-100 ${validator.getFormControlValidClass("ingredients", true)}`}
                                value={formState.ingredients}
                                onChange={onChange}
                                onBlur={validator.requiredValidator}
                                placeholder="Съставки"
                            >
                            </textarea>
                            <p className="invalid-feedback">
                                Въвеждането на съставки е задължително!
                            </p>
                        </div>
                        <div className="body pt-0">
                            <div className="meal-management">
                                <button type="submit" className="btn btn-sm btn-primary" disabled={validator.hasErrors()}>
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
                        <p className="text-muted">{meal.ingredients}</p>
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