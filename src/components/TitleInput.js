


const TitleInput = ({inputOrder, inputType, handleInput, parentState}) => {
  
  
  return (
    <> 
      <label className="sr-only" htmlFor="title">Enter a title</label>
      <input placeholder="Enter a title" value={parentState[inputOrder].value}
            id="title" name="title" type="text" 
            onChange={(e) => handleInput(inputOrder, inputType, e.target.value)} />
    </>
  )


}

export default TitleInput; 