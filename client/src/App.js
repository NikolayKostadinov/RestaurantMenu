
function App() {
  return (
    <div className="App">
      <>
        {/* First Navigation */}
        <nav className="navbar nav-first navbar-dark bg-dark">
          <div className="container">
            <a className="navbar-brand" href="#">
              <img
                src="./imgs/navbar-brand.svg"
                alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page"
              />
            </a>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link text-primary" href="#home">
                  CALL US : <span className="pl-2 text-muted">(123) 456 7890</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* End of First Navigation */}
        {/* Second Navigation */}
        <nav className="nav-second navbar custom-navbar navbar-expand-sm navbar-dark bg-dark sticky-top">
          <div className="container">
            <button
              className="navbar-toggler ml-auto"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#service">
                    Our Service
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#team">
                    Our Team
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#testmonial">
                    Testmonials
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a href="components.html" className="btn btn-primary btn-sm">
                    Components
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* End Of Second Navigation */}
        {/* Page Header */}
        <header className="header">
          <div className="overlay">
            <img
              src="./imgs/navbar-brand.svg"
              alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page"
              className="logo"
            />
            <h1 className="subtitle">Welcome To Restaurant Menu System</h1>
            <h1 className="title">Really Fresh &amp; Tasty</h1>
            <a className="btn btn-primary mt-3" href="#book-table">
              Book A Table
            </a>
          </div>
        </header>
        {/* End Of Page Header */}
        {/* About Section */}
        <section id="about">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h6 className="section-subtitle">Opening Times</h6>
                <h3 className="section-title">Working Times</h3>
                <p className="mb-1 font-weight-bold">
                  Monday - Thursday :{" "}
                  <span className="font-weight-normal pl-2 text-muted">
                    7:00 am - 12:00 pm
                  </span>
                </p>
                <p className="mb-1 font-weight-bold">
                  Friday - Saturday :{" "}
                  <span className="font-weight-normal pl-2 text-muted">
                    7:00 am - Midnight
                  </span>
                </p>
                <p className="mb-1 font-weight-bold">
                  Saturday - Sunday :{" "}
                  <span className="font-weight-normal pl-2 text-muted">
                    9:00 am - 12:00 pm
                  </span>
                </p>
                <a href="#book-table" className="btn btn-primary btn-sm w-md mt-4">
                  Book a table
                </a>
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
            <div className="section-devider my-6 transparent" />
            <div className="row align-items-center">
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
            </div>
          </div>
        </section>
        {/* End OF About Section */}
        {/* Service Section */}
        <section id="service" className="pattern-style-4 has-overlay">
          <div className="container raise-2">
            <h6 className="section-subtitle text-center">Featured Food</h6>
            <h3 className="section-title mb-6 pb-3 text-center">Special Dishes</h3>
            <div className="row">
              <div className="col-md-6 mb-4">
                <a href="javascrip:void(0)" className="custom-list">
                  <div className="img-holder">
                    <img
                      src="./imgs/dish-1.jpg"
                      alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page"
                    />
                  </div>
                  <div className="info">
                    <div className="head clearfix">
                      <h5 className="title float-left">Aperiam incidunt dicta</h5>
                      <p className="float-right text-primary">$25</p>
                    </div>
                    <div className="body">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing Eos, earum
                        dicta est veniam beatae libero!
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 mb-4">
                <a href="javascrip:void(0)" className="custom-list">
                  <div className="img-holder">
                    <img
                      src="./imgs/dish-2.jpg"
                      alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page"
                    />
                  </div>
                  <div className="info">
                    <div className="head clearfix">
                      <h5 className="title float-left">Facere molestiae quaerat</h5>
                      <p className="float-right text-primary">$35</p>
                    </div>
                    <div className="body">
                      <p>
                        Voluptatem voluptate ad fugit aliquam, laboriosam neque vero
                        incidunt itaque.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 mb-4">
                <a href="javascrip:void(0)" className="custom-list">
                  <div className="img-holder">
                    <img
                      src="./imgs/dish-3.jpg"
                      alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page"
                    />
                  </div>
                  <div className="info">
                    <div className="head clearfix">
                      <h5 className="title float-left">Veniam Beatae Libero</h5>
                      <p className="float-right text-primary">$18</p>
                    </div>
                    <div className="body">
                      <p>
                        Accusamus libero quo tempore suscipit molestias qui quam illo
                        facere aspernatur esse! Doloribus?
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 mb-4">
                <a href="javascrip:void(0)" className="custom-list">
                  <div className="img-holder">
                    <img
                      src="./imgs/dish-4.jpg"
                      alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page"
                    />
                  </div>
                  <div className="info">
                    <div className="head clearfix">
                      <h5 className="title float-left">Incidunt Eius</h5>
                      <p className="float-right text-primary">$30</p>
                    </div>
                    <div className="body">
                      <p>
                        Doloremque maiores tempore, nostrum rerum nihil distinctio
                        expedita voluptates eos deserunt.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 mb-4">
                <a href="javascrip:void(0)" className="custom-list">
                  <div className="img-holder">
                    <img
                      src="./imgs/dish-5.jpg"
                      alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page"
                    />
                  </div>
                  <div className="info">
                    <div className="head clearfix">
                      <h5 className="title float-left">Nihil dDstinctio</h5>
                      <p className="float-right text-primary">$24</p>
                    </div>
                    <div className="body">
                      <p>
                        Doloremque maiores tempore, nostrum rerum expedita incidunt
                        eius voluptates eos deserunt.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-md-6 mb-4">
                <a href="javascrip:void(0)" className="custom-list">
                  <div className="img-holder">
                    <img
                      src="./imgs/dish-6.jpg"
                      alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page"
                    />
                  </div>
                  <div className="info">
                    <div className="head clearfix">
                      <h5 className="title float-left">Dignissimos quidem</h5>
                      <p className="float-right text-primary">$44</p>
                    </div>
                    <div className="body">
                      <p>
                        Doloremque maiores tempore, nostrum rerum nihil distinctio
                        expedita voluptates eos deserunt.
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End of Featured Food Section */}
        {/* Menu Section */}
        <section className="has-img-bg">
          <div className="container">
            <h6 className="section-subtitle text-center">Great Food</h6>
            <h3 className="section-title mb-6 text-center">Main Menu</h3>
            <div className="card bg-light">
              <div className="card-body px-4 pb-4 text-center">
                <div className="row text-left">
                  <div className="col-md-6 my-4">
                    <a
                      href="#"
                      className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0"
                    >
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          Dolorem Exmaiores
                          <p className="mt-1 mb-0">
                            Numquam dolor dolores molestiae maiores quidem.
                          </p>
                        </div>
                        <h6 className="float-right text-primary">$12</h6>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 my-4">
                    <a
                      href="#"
                      className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0"
                    >
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          Aperiam incidunt dicta
                          <p className="mt-1 mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          </p>
                        </div>
                        <h6 className="float-right text-primary">$23</h6>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 my-4">
                    <a
                      href="#"
                      className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0"
                    >
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          Animi repellat labore
                          <p className="mt-1 mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          </p>
                        </div>
                        <h6 className="float-right text-primary">$32</h6>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 my-4">
                    <a
                      href="#"
                      className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0"
                    >
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          Quo ipsum similique
                          <p className="mt-2 mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          </p>
                        </div>
                        <h6 className="float-right text-primary">$17</h6>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 my-4">
                    <a
                      href="#"
                      className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0"
                    >
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          Est nam tempore
                          <p className="mt-2 mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          </p>
                        </div>
                        <h6 className="float-right text-primary">$21</h6>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6 my-4">
                    <a
                      href="#"
                      className="pb-3 mx-3 d-block text-dark text-decoration-none border border-left-0 border-top-0 border-right-0"
                    >
                      <div className="d-flex">
                        <div className="flex-grow-1">
                          Nesciunt ab veniam
                          <p className="mt-2 mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                          </p>
                        </div>
                        <h6 className="float-right text-primary">$10</h6>
                      </div>
                    </a>
                  </div>
                </div>
                <a href="#book-table" className="btn btn-primary mt-4">
                  Book A Table
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* End of Menu Section */}
        {/* Team Section */}
        <section id="team">
          <div className="container">
            <h6 className="section-subtitle text-center">Great Team</h6>
            <h3 className="section-title mb-5 text-center">Talented Chefs</h3>
            <div className="row">
              <div className="col-md-4 my-3">
                <div className="team-wrapper text-center">
                  <img
                    src="./imgs/chef-1.jpg"
                    className="circle-120 rounded-circle mb-3 shadow"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page"
                  />
                  <h5 className="my-3">Brian Scott</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
                    suscipit, odio nulla reiciendis!
                  </p>
                  <h6 className="socials mt-3">
                    <a href="javascript:void(0)" className="px-2">
                      <i className="ti-facebook" />
                    </a>
                    <a href="javascript:void(0)" className="px-2">
                      <i className="ti-twitter" />
                    </a>
                    <a href="javascript:void(0)" className="px-2">
                      <i className="ti-instagram" />
                    </a>
                    <a href="javascript:void(0)" className="px-2">
                      <i className="ti-google" />
                    </a>
                  </h6>
                </div>
              </div>
              <div className="col-md-4 my-3">
                <div className="team-wrapper text-center">
                  <img
                    src="./imgs/chef-2.jpg"
                    className="circle-120 rounded-circle mb-3 shadow"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page"
                  />
                  <h5 className="my-3">Edward Harris</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
                    suscipit, odio nulla reiciendis!
                  </p>
                  <h6 className="socials mt-3">
                    <a href="javascript:void(0)" className="px-2">
                      <i className="ti-facebook" />
                    </a>
                    <a href="javascript:void(0)" className="px-2">
                      <i className="ti-twitter" />
                    </a>
                    <a href="javascript:void(0)" className="px-2">
                      <i className="ti-instagram" />
                    </a>
                    <a href="javascript:void(0)" className="px-2">
                      <i className="ti-google" />
                    </a>
                  </h6>
                </div>
              </div>
              <div className="col-md-4 my-3">
                <div className="team-wrapper text-center">
                  <img
                    src="./imgs/chef-3.jpg"
                    className="circle-120 rounded-circle mb-3 shadow"
                    alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page"
                  />
                  <h5 className="my-3">Richard Reb</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
                    suscipit, odio nulla reiciendis!
                  </p>
                  <h6 className="socials mt-3">
                    <a href="javascript:void(0)" className="px-2">
                      <i className="ti-facebook" />
                    </a>
                    <a href="javascript:void(0)" className="px-2">
                      <i className="ti-twitter" />
                    </a>
                    <a href="javascript:void(0)" className="px-2">
                      <i className="ti-instagram" />
                    </a>
                    <a href="javascript:void(0)" className="px-2">
                      <i className="ti-google" />
                    </a>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of Team Section */}
        {/* Testmonial Section */}
        <section id="testmonial" className="pattern-style-3">
          <div className="container">
            <h6 className="section-subtitle text-center">Best Clients</h6>
            <h3 className="section-title mb-5 text-center">Testmonials</h3>
            <div className="row">
              <div className="col-md-4 my-3 my-md-0">
                <div className="card">
                  <div className="card-body">
                    <div className="media align-items-center mb-3">
                      <img
                        className="mr-3"
                        src="./imgs/avatar.jpg"
                        alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page"
                      />
                      <div className="media-body">
                        <h6 className="mt-1 mb-0">John Doe</h6>
                        <small className="text-muted mb-0">Business Analyst</small>
                      </div>
                    </div>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Delectus enim modi, id dicta reiciendis itaque.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-3 my-md-0">
                <div className="card">
                  <div className="card-body">
                    <div className="media align-items-center mb-3">
                      <img
                        className="mr-3"
                        src="./imgs/avatar-1.jpg"
                        alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page"
                      />
                      <div className="media-body">
                        <h6 className="mt-1 mb-0">Maria Garcia</h6>
                        <small className="text-muted mb-0">Insurance Agent</small>
                      </div>
                    </div>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Delectus enim modi, id dicta reiciendis itaque.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-md-4 my-3 my-md-0">
                <div className="card">
                  <div className="card-body">
                    <div className="media align-items-center mb-3">
                      <img
                        className="mr-3"
                        src="./imgs/avatar-2.jpg"
                        alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page"
                      />
                      <div className="media-body">
                        <h6 className="mt-1 mb-0">Mason Miller</h6>
                        <small className="text-muted mb-0">
                          Residential Appraiser
                        </small>
                      </div>
                    </div>
                    <p className="mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Delectus enim modi, id dicta reiciendis itaque.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End of Testmonial Section */}
        {/* Book Table Section */}
        <section id="book-table" className="bg-white">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 d-none d-md-block">
                <img
                  src="./imgs/contact.jpg"
                  alt="Download free bootstrap 4 landing page, free boootstrap 4 templates, Download free bootstrap 4.1 landing page, free boootstrap 4.1.1 templates, Pigga Landing page"
                  className="w-100 rounded shadow"
                />
              </div>
              <div className="col-md-6">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="tel"
                      className="form-control"
                      name="phone"
                      placeholder="Your Phone"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="datetime-local"
                      className="form-control"
                      name="date"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="number"
                      className="form-control"
                      name="seats"
                      placeholder="Seats"
                    />
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">
                    Book A Table
                  </button>
                  <small className="form-text text-muted mt-3">
                    We don't span customers. Check our <a href="#">Privacy Policy</a>
                  </small>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* End OF Book Table Section */}
        {/* Prefooter Section  */}
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
        </div>
        {/* End of PreFooter Section */}
        {/* Page Footer */}
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
                  <a href="javascript:void(0)" className="px-2">
                    <i className="ti-facebook" />
                  </a>
                  <a href="javascript:void(0)" className="px-2">
                    <i className="ti-twitter" />
                  </a>
                  <a href="javascript:void(0)" className="px-2">
                    <i className="ti-instagram" />
                  </a>
                  <a href="javascript:void(0)" className="px-2">
                    <i className="ti-google" />
                  </a>
                </h6>
              </div>
            </div>
          </div>
        </footer>
        {/* End of Page Footer */}
      </>

    </div>
  );
}

export default App;
