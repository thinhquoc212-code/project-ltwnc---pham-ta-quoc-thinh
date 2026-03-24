function MyProduct ({img, namee, price, description})
{
    return(
        <div>
            <img src={img} alt={namee} className="icon"/>
            <h3>{namee}</h3>
            <p class="role">{price}</p>
            <p>{description}</p>
        </div>
    );
};
export default MyProduct;