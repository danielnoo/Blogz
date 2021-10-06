
// this component is called by Publish.js 
// it takes in some user input in the form of when they called it and what type of input they called. 
// It also receives a handler function that has three parameters to allow it to send data back
// to the parent Publish.js


const ImageInput = ({inputOrder, inputType, handleInput, parentState}) => {
  


  return (
    <> 
      <label className="sr-only" htmlFor="image">Enter an image URL</label>
      <input placeholder="Enter an image URL" value={parentState[inputOrder].value} 
            id="image" name="image" type="text" 
            onChange={(e) => handleInput(inputOrder, inputType, e.target.value)} />
    </>
  )


}

export default ImageInput;
