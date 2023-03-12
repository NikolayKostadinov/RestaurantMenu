import Restaurant from "../restaurant/Restaurant";

const Home = () => {
    return (
        <>
            <header className="transparent">
                <div className="overlay">
                    <img
                        src="./imgs/navbar-brand.svg"
                        alt="Logo"
                        className="logo"
                    />
                    <h2 className="subtitle">Добре дошли в електронното меню</h2>
                    <h1 className="title">Всичко е Свежо &amp; Вкусно</h1>
                    <div className="bg-primary delimiter"></div>
                </div>
            </header>
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
            <Restaurant/>
        </>);
}
export default Home;