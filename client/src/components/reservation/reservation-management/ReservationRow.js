import * as moment from 'moment';
import 'moment/locale/bg';


const ReservationRow = ({
    index,
    reservation
}) => {
    moment.locale('bg');

    return (
        <tr>
            <td>{index + 1}</td>
            <td>{moment(reservation.datetime).format('LLL')}</td>
            <td>{reservation.name}</td>
            <td>{reservation.phone}</td>
            <td>{reservation.email}</td>
            <td>
                <button className='btn btn-sm btn-outline-primary' data-toggle="tooltip" data-placement="right" title="Потвърди">
                    <i className="fa-regular fa-thumbs-up"></i>
                </button>
                <button className='btn btn-sm btn-primary ml-2' data-toggle="tooltip" data-placement="right" title="Приключи">
                    <i className="fa-regular fa-calendar-check"></i>
                </button>
            </td>
        </tr>
    );
}
export default ReservationRow;