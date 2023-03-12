const RestaurantImage = ({ imageUrl, altText }) => {
    return (
        <div className="col-6">
            <img
                alt={altText}
                src={imageUrl}
                className="w-100 rounded shadow"
            />
        </div>
    );
}
export default RestaurantImage;