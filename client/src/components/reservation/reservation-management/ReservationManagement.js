import { useState } from "react";
const ReservationManagement = () => {
    const [formState, setFormState] = useState({ restaurantId: '' });
    const values = [
        { value: "v1", label: "value 1" },
        { value: "v2", label: "value 2" },
        { value: "v3", label: "value 3" },
    ];

    const onChange = (ev) => {
        setFormState(state =>
        ({
            ...state,
            [ev.target.name]: ev.target.value
        }));

        console.log(ev.target.value);
    }

    return (
        <section>
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
                            {values.map(v => <option key={v.value} value={v.value}>{v.label}</option>)}
                        </select>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input
                                type="date"
                                className="form-control"
                                name="date"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ReservationManagement;