// this component is called by Publish.js 
// it takes in some user input in the form of when they called it and what type of input they called. 
// It also receives a handler function that has three parameters to allow it to send data back
// to the parent Publish.js

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