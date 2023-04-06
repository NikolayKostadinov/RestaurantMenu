import brand from '../../assets/imgs/navbar-brand.png';

const NotFound = () => {
    return(
        <section className="transparent">
            <div className="overlay extended">
                <img
                    src={brand}
                    alt="Logo"
                    className="logo"
                />
                <h2 className="subtitle">Съжаляваме за неудобството</h2>
                <h1 className="title text-center">404</h1>
                <h2 className="subtitle"> Желания от вас ресурс не е открит!</h2>
                <div className="bg-primary delimiter"></div>
            </div>
        </section>
    );
}

export default NotFound;
