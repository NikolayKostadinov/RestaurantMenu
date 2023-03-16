const MealList = ({
  restaurantId,
  mealType,
  transparent,
  title,
  subtitle
}) => {
  let overlayed = '';
  if(transparent){
    overlayed ="overlay";
  }
  console.log(restaurantId, mealType, transparent);

    return(
    <section className={`${transparent?'transperent':'pattern-style-4 has-overlay'}`}>
    <div className={overlayed}>
      <div className="container raise-2">
        <h6 className="section-subtitle text-center">Без <span className="text-primary font-weight-bold">|</span> Угризения</h6>
        <h3 className="section-title mb-6 pb-3 text-center">Десерти</h3>
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
      </div>
    </section>)
}
export default MealList;