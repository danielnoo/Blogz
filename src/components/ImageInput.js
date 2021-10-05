

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