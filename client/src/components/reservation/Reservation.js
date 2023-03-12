const Reservation = () => {
    return(        <section id="book-table" className="bg-white">
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
  </section>)
}
export default Reservation;