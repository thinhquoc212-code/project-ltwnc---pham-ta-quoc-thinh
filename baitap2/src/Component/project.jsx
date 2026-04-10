function MyProduct ({id,img, namee, company, button})
{
    return(
        <div>
            <input type="hidden" value={id} />
            <img src={img} alt={namee} className="icon"/>
            <h3>{namee}</h3>
            <p class="role">{company}</p>
            <br></br>
            <button class = "more">xem chi tiết</button>
        </div>
    );
};
export default MyProduct;