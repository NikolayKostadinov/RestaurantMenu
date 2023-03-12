const Prefooter = () => {
    return (
        <div className="py-4 border border-lighter border-bottom-0 border-left-0 border-right-0 bg-dark">
            <div className="container">
                <div className="row justify-content-between align-items-center text-center">
                    <div className="col-md-3 text-md-left mb-3 mb-md-0">
                        <img
                            src="./imgs/navbar-brand.svg"
                            width={100}
                            alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page"
                            className="mb-0"
                        />
                    </div>
                    <div className="col-md-9 text-md-right">
                        <a href="#" className="px-3">
                            <small className="font-weight-bold">Our Company</small>
                        </a>
                        <a href="#" className="px-3">
                            <small className="font-weight-bold">Our Location</small>
                        </a>
                        <a href="#" className="px-3">
                            <small className="font-weight-bold">Help Center</small>
                        </a>
                        <a href="components.html" className="pl-3">
                            <small className="font-weight-bold">Components</small>
                        </a>
                    </div>
                </div>
            </div>
        </div>)
}
export default Prefooter;