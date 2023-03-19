import { useState } from "react";
import { useAlertContext } from "../../../contexts/AlertContext";
import { useRestaurantManagementContext } from "../../../contexts/RestaurantManagementContext";
import useUploadImg from "../../../hooks/useUploadImg";
import useValidator from "../../../hooks/useValidator";

const RestaurantForm = ({
    onSubmitHandler,
}) => {
    const [formState, setFormState] = useState({
        title: '',
    });

    const managementContex = useRestaurantManagementContext();
    const formVisible = managementContex.isCreate || managementContex.isEdit;
    const validator = useValidator();
    const alertContext = useAlertContext();
    const { uploadImage } = useUploadImg();

    let formTitle = managementContex.isCreate ? "Регистрация на ресторант" : "Редакция на ресторант";

    const setResult = (fieldName, value, index = null) => {

        if (index != null) {
            const arr = formState[fieldName] || [];
            arr[index] = value;
            value = [...arr];
        }

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
        setFormState({});
        validator.clearErrors();
        managementContex.hideForm();
    }

    const onSubmit = (ev) => {
        ev.preventDefault();
        if (!validator.hasErrors()) {
            onSubmitHandler(formState);
        }
        setFormState({});
    }

    const uploadRestaurantImage = (e) => {
        e.preventDefault();
        alertContext.showLoading();
        uploadImage('restaurants', e)
            .then(url => { setResult('imagesUrls', url, Number(e.target.name)); })
            .catch(err => {
                console.log(err);
                alertContext.showAlert('Неуспешна операция!', 'danger');
            })
            .finally(() => alertContext.hideLoading());
    }

    return (
        formVisible &&
        <div className="dark-form-overlay">
            <div className="container create-form-wrapper">
                <form className="restaurant-modify" onSubmit={onSubmit}>
                    <h1 className="title text-center mb-4">{formTitle}</h1>
                    <div className="row align-items-start">
                        <div className="col-md-4">
                            <div className="image-inputs">
                                <div className="img-holder">
                                    <div className="img-wrapper">
                                        <img
                                            src={formState?.imagesUrls?.[0]}
                                            className="img-responsive"
                                            alt={formState.title}
                                        />
                                    </div>
                                    <label htmlFor="file0" className="btn btn-sm btn-primary">Качи картинка</label>
                                    <input id="file0" type="file" name="0" accept="image/*" onChange={uploadRestaurantImage} style={{ "display": "none" }} />
                                </div>
                                <div className="img-holder">
                                    <div className="img-wrapper">
                                        <img
                                            src={formState?.imagesUrls?.[1]}
                                            className="img-responsive"
                                            alt={formState.title}
                                        />
                                    </div>
                                    <label htmlFor="file1" className="btn btn-sm btn-primary">Качи картинка</label>
                                    <input id="file1" type="file" name="1" accept="image/*" onChange={uploadRestaurantImage} style={{ "display": "none" }} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="form-group mb-2">
                                <input
                                    type="text"
                                    name="title"
                                    className={validator.getFormControlValidClass("title", true)}
                                    placeholder="Название"
                                    value={formState.title}
                                    onChange={onChange}
                                    onBlur={validator.requiredValidator}
                                />
                                <p className="invalid-feedback text-right">
                                    Полето название е задължително!
                                </p>
                            </div>
                            <h4 className="my-2 pb-0">Работно време</h4>
                            <div className="form-inline">
                                <label className="mb-1 text-primary font-weight-bold ">
                                    Понеделник - Четвъртък :
                                </label>
                                <input
                                    type="text"
                                    name="workingHours.businessDays"
                                    className={`${validator.getFormControlValidClass("workingHours.businessDays", true)} `}
                                    placeholder="7:00 - 22:00"
                                    value={formState?.workingHours?.businessDays}
                                    onChange={onChange}
                                    onBlur={validator.requiredValidator}
                                />
                                <p className="invalid-feedback text-right">
                                    Полето название е задължително!
                                </p>
                            </div>

                            <div className="form-inline">
                                <label className="mb-1 text-primary font-weight-bold ">
                                    Петък - Събота :
                                </label>
                                <input
                                    type="text"
                                    name="workingHours.fridayAndSaturday"
                                    className={`${validator.getFormControlValidClass("workingHours.fridayAndSaturday", true)} `}
                                    placeholder="7:00 - 22:00"
                                    value={formState?.workingHours?.fridayAndSaturday}
                                    onChange={onChange}
                                    onBlur={validator.requiredValidator}
                                />
                                <p className="invalid-feedback text-right">
                                    Полето название е задължително!
                                </p>
                            </div>
                            <div className="form-inline">
                                <label className="mb-1 text-primary font-weight-bold">
                                    Неделя :
                                </label>
                                <input
                                    type="text"
                                    name="workingHours.sunday"
                                    className={`${validator.getFormControlValidClass("workingHours.sunday", true)}`}
                                    placeholder="7:00 - 22:00"
                                    value={formState?.workingHours?.sunday}
                                    onChange={onChange}
                                    onBlur={validator.requiredValidator}
                                />
                                <p className="invalid-feedback text-right">
                                    Полето название е задължително!
                                </p>
                            </div>
                            <div className="form-buttons-end">
                                <button type="submit" className="btn btn-sm btn-primary" disabled={validator.hasErrors()}>
                                    <i className="fa-solid fa-floppy-disk"></i> Запис
                                </button>
                                <button className="btn btn-sm btn-primary" onClick={onCancel}>
                                    <i className="fa-solid fa-xmark"></i>   Отказ
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default RestaurantForm;