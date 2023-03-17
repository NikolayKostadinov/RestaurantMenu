const Reservation = () => {
  return (
    <section id="book-table" className="bg-white extended">
      <div className="container">
      <h1 className="title text-center mb-6">Резервация</h1>
        <div className="row align-items-center">
          <div className="col-md-6 d-none d-md-block">
            <img
              src="/imgs/contact.jpg"
              alt="Форма за резервация"
              className="w-100 rounded shadow"
            />
          </div>
          <div className="col-md-6">
            <form>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  aria-describedby="emailHelp"
                  placeholder="Вашето име"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Вашата електронна поща"
                />
              </div>
            
              <div className="form-group">
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  placeholder="Вашия телефон"
                />
              </div>
              <div className="form-group">
                <input
                  type="datetime-local"
                  className="form-control"
                  name="datetime"
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  className="form-control"
                  name="seats"
                  placeholder="Брой места"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block">
                Запазете маса
              </button>
              <small className="form-text text-muted mt-3 text-center">
                Ние нe изпращаме нежелани съобщения на <span className="text-primary"> нашите клиенти</span>, като част от нашата.
              </small>
            </form>
          </div>
        </div>
      </div>
    </section>)
}
export default Reservation;