

const SubTitleInput = ({inputOrder, inputType, handleInput, parentState}) => {
  
  

  return (
    <> 
      <label className="sr-only" htmlFor="subtitle">Enter a subtitle</label>
      <input placeholder="Enter a subtitle" value={parentState[inputOrder].value} 
            id="subtitle" name="subtitle" type="text" 
            onChange={(e) => handleInput(inputOrder, inputType, e.target.value)} />
    </>
  )


}

export default SubTitleInput;