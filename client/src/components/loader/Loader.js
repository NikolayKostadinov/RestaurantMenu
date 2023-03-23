import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import useMeals from "./useMeals";
import * as reservationService from "../../services/reservationService";
import useReservations from "./useReservations";


const Loader = () => {
    const [loading, setLoading] = useState(true);
    const [result, setResult] = useState({});
    const { reservations } = useReservations();

    const resSeed = createResevations(reservations);

    useEffect(() => {
        resSeed.forEach(r => {
            reservationService.create(r)
                .then(res => setResult(stat => ({ ...stat, [res._id]: res })))
        });
        setLoading(false);
    }, []);
    console.log("The result is:");
    console.log(result);

    if (loading) {
        return (<h1>Loading...</h1>);
    }

    return (
        <Navigate to="/" />
    )
}
export default Loader;


const createResevations = (res) => {
    const days = ['03-23', '03-24', '03-25', '03-26', '03-27', '03-28', '03-29', '03-30', '03-31', '04-01', '04-02', '04-03', '04-04', '04-05', '04-06', '04-07', '04-08', '04-09'];

    const resOut = [];

    days.forEach(d => {
        res.forEach(r => {
            const hour = getRandomInt(16,23);
            let minutes = getRandomInt(0,59);
            minutes = minutes<10?`0${minutes}`: minutes;

            const datetime = `2023-${d}T${hour}:${minutes}`;
            const seats = getRandomInt(1,6);
            resOut.push({...r, datetime, seats});
        });
    });

    return resOut;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}
