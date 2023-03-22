import { useState, useEffect } from "react";

import { useAuthContext } from "../../../contexts/AuthContext";
import { useAlertContext } from "../../../contexts/AlertContext";

import * as restaurantService from "../../../services/restaurantService";
import * as reservationService from "../../../services/reservationService";
import ReservationRow from "./ReservationRow";
import moment from "moment";

const ReservationManagement = () => {
    const [formState, setFormState] = useState({ restaurantId: '' });
    const [restaurants, setRestaurants] = useState([]);
    const [reservations, setReservations] = useState([]);

    const { user } = useAuthContext();
    const alertContext = useAlertContext();


    useEffect(() => {
        alertContext.showLoading()
        restaurantService.getAllByUser(user)
            .then(data => setRestaurants(Object.values(data)))
            .catch(err => {
                console.log(err);
                alertContext.showAlert('Неуспешна операция!', 'danger');
            })
            .finally(
                alertContext.hideLoading()
            )
    }, []);

    useEffect(() => {
        if (formState.restaurantId && formState.date) {
            alertContext.showLoading();
            reservationService.getAll(formState.restaurantId, formState.date)
                .then(data => {
                    console.log(Object.values(data));
                    setReservations(Object.values(data)
                        .filter(r =>
                            r.restaurantId === formState.restaurantId
                            && (moment(r.datetime).isBetween(
                                moment(formState.date + "T00:00"),
                                moment(formState.date + "T23:59"))))
                        .sort((o1, o2) => moment(o1.datetime).isAfter(moment(o2.datetime)))
                    );
                })
                .catch(err => {
                    console.log(err);
                    alertContext.showAlert('Неуспешна операция!', 'danger');
                })
                .finally(
                    alertContext.hideLoading()
                )
        }
    }, [formState.restaurantId, formState]);

    const onChange = (ev) => {
        setFormState(state =>
        ({
            ...state,
            [ev.target.name]: ev.target.value
        }));

        console.log(ev.target.value);
    }

    return (
        <section className="extended pb-2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <select
                            name="restaurantId"
                            className="custom-select custom-select-lg"
                            value={formState.restaurantId}
                            onChange={onChange}
                        >
                            <option key={''} value={''} disabled>Изберете ресторант...</option>
                            {restaurants.map(r => <option key={r._id} value={r._id}>{r.title}</option>)}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                type="date"
                                className="form-control"
                                name="date"
                                value={formState.date}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                </div>
                <table className="table table-striped table-hover table-sm">
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>Време</th>
                            <th>Имена</th>
                            <th>Телефон</th>
                            <th>Електронна поща</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {reservations.map((r, ix) => <ReservationRow key={r._id} index={ix} reservation={r} />)}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
export default ReservationManagement;