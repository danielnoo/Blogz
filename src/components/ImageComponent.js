
// a stretch-strech goal is to incorporate the unsplash API to allow or even guess what
// pictures the user might want to include in their article, the alt-tag is sadly not doing much 
// with this app in its current state

const ImageComponent = ({keyPass, text}) => {

  return(

    <div className="imageContainer" key={keyPass}>
      <img src={text} alt="user selected scene" />
    </div>

  )
}


export default ImageComponent;