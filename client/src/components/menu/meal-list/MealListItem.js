const MealListItem = ({ meal }) => {
    return (
        <div className="col-md-6 mb-4">
            <div className="custom-list">
                <div className="img-holder">
                    <img
                        src={meal.imageUrl}
                        className="img-responsive"
                        alt={meal.title}
                    />
                </div>
                <div className="info">
                    <div className="head clearfix">
                        <h5 className="title float-left">{meal.title}</h5>
                        <p className="float-right text-primary">{meal.price.toFixed(2)} лв.</p>
                    </div>
                    <div className="body">
                        <p>{meal.ingredients}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MealListItem;