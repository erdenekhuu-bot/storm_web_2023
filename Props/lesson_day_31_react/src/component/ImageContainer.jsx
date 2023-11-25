function ImageContainer({imgSrc, altText, containerId}){
    return (
        <div className="image-container" id={containerId}>
            <img src={imgSrc} alt={altText}/>
        </div>
    )
}
export default ImageContainer