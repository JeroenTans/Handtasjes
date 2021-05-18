
function Tile ({title, text, image, alt}){
    return (
        <section>
            <h2>{title}</h2>
            <p>{text}</p>
            <img src={image} alt={alt}/>
        </section>
    )
}

export default Tile

