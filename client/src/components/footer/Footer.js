const Footer = () => {
    return (
        <footer className="border border-dark border-left-0 border-right-0 border-bottom-0 p-4 bg-dark">
            <div className="container">
                <div className="row align-items-center text-center text-md-left">
                    <div className="col">
                        <p className="mb-0 small">
                            © ,{" "}
                            <a href="https://www.devcrud.com" target="_blank">
                                DevCrud
                            </a>{" "}
                            All rights reserved{" "}
                        </p>
                    </div>
                    <div className="d-none d-md-block">
                        <h6 className="small mb-0">
                            <a href="#" className="px-2">
                                <i className="ti-facebook" />
                            </a>
                            <a href="#" className="px-2">
                                <i className="ti-twitter" />
                            </a>
                            <a href="#" className="px-2">
                                <i className="ti-instagram" />
                            </a>
                            <a href="#" className="px-2">
                                <i className="ti-google" />
                            </a>
                        </h6>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer;