

const BodyInput = ({inputOrder, inputType, handleInput, parentState}) => {
  


  return (
    <> 
      <label className="sr-only" htmlFor="body">Write some body text</label>
      <textarea placeholder="Start writing" value={parentState[inputOrder].value} name="body" 
      id="body" onChange={(e) => handleInput(inputOrder, inputType, e.target.value)} />
    </>
  )


}

export default BodyInput;