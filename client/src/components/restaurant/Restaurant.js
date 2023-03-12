import { Link } from 'react-router-dom';

const Restaurant = ({ restaurant }) => {
    return (
        <section className="restaurant">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h6 className="section-subtitle">Работно време</h6>
                        <h3 className="section-title">{restaurant.title}</h3>
                        <p className="mb-1 text-primary font-weight-bold">
                            Понеделник - Четвъртък :
                            <span className="font-weight-normal pl-2 text-dark">
                                {restaurant.workindHours.businessDays}
                            </span>
                        </p>
                        <p className="mb-1 text-primary font-weight-bold">
                            Петък - Събота :{" "}
                            <span className="font-weight-normal pl-2 text-dark">
                                {restaurant.workindHours.fridayAndSaturday}
                            </span>
                        </p>
                        <p className="mb-1 text-primary font-weight-bold">
                            Неделя :{" "}
                            <span className="font-weight-normal pl-2 text-dark">
                                {restaurant.workindHours.sunday}
                            </span>
                        </p>
                        <Link to={`/reservetion/${restaurant._id}`} className="btn btn-primary btn-sm w-md mt-4 mr-2">
                            Направете резервация
                        </Link>
                        <Link to={`/menu/${restaurant._id}`} className="btn btn-outline-primary btn-sm w-md mt-4">
                            Разгледайте менюто
                        </Link>
                    </div>
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col">
                                <img
                                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page"
                                    src="./imgs/about-1.jpg"
                                    className="w-100 rounded shadow"
                                />
                            </div>
                            <div className="col">
                                <img
                                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page"
                                    src="./imgs/about-2.jpg"
                                    className="w-100 rounded shadow"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="section-devider my-6 transparent" /> */}
                {/* <div className="row align-items-center">
                    <div className="col-md-6">
                        <h6 className="section-subtitle">The Great Story</h6>
                        <h3 className="section-title">Our Culinary Journey</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic illo
                            a, aut, eum nesciunt obcaecati deserunt ipsam nostrum voluptate
                            recusandae?
                        </p>
                    </div>
                    <div className="col-md-6 order-1 order-sm-first">
                        <div className="row">
                            <div className="col">
                                <img
                                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page"
                                    src="./imgs/about-3.jpg"
                                    className="w-100 rounded shadow"
                                />
                            </div>
                            <div className="col">
                                <img
                                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page"
                                    src="./imgs/about-4.jpg"
                                    className="w-100 rounded shadow"
                                />
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}
export default Restaurant;