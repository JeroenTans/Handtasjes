
function ProductBag ({bestSeller, image, titel, price,}) {
    return (
        <article>
            <span>{bestSeller?"Best seller":"New collection"}</span>
            <img src={image} alt={titel}/>
            <p>the {titel} bag</p>
            <h4>€{price},-</h4>
        </article>
    )
}

export default ProductBag