

// a helper that goes through the post array and gathers the 
// length of all text and then divides it by the low end of the average
// words per minute that people can read, then divides that by the average
// length of a word

const TimeToRead = ({post}) => {
  
  let letters = 0;

  post.forEach(textPiece => {
    letters += textPiece[1].length
  })

  return(
    <>
      {`${Math.round((letters / 160) / 4.6)} minute read`}
    </>
  )
}


export default TimeToRead