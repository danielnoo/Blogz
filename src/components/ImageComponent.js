// a stretch-strech goal is to incorporate the unsplash API to allow or even guess what
// pictures the user might want to include in their article, the alt-tag is sadly not doing much
// with this app in its current state

// I do have an idea to fix this bug but ran out of time for this as well - it would present the user with two inputs, one for image and one for image description. The alt tag would be left up to the user but would be better than nothing
const ImageComponent = ({ text }) => {
  return (
    <div className="imageContainer">
      <img src={text} alt="user selected scene" />
    </div>
  );
};

export default ImageComponent;
