

const TimeToRead = ({post}) => {
  
  let letters = 0;

  post.forEach(textPiece => {
    letters += textPiece[1].length
  })

  return(
    <>
      {`${Math.round((letters / 220) / 4.6)} minute read`}
    </>
  )
}


export default TimeToRead