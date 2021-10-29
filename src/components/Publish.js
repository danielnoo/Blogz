import { useState } from "react";
import { db } from "../dbFunctions";
import InputChooser from "./InputChooser";
import TitleInput from "./TitleInput";
import SubTitleInput from "./SubTitleInput";
import BodyInput from "./BodyInput";
import ImageInput from "./ImageInput";
import { Link } from "react-router-dom";

const Publish = ({ user }) => {
  const [submitted, setSubmitted] = useState(false);
  // this state array is used to generate the inputs dynamically
  const [inputArray, setInputArray] = useState([]); // each entry is a type of input
  // this state is used to store input data from child inputs in order in order
  const [articleBuild, setArticleBuild] = useState([
    { inputType: "", inputValue: "" },
    { inputType: "", inputValue: "" },
    { inputType: "", inputValue: "" },
    { inputType: "", inputValue: "" },
    { inputType: "", inputValue: "" },
    { inputType: "", inputValue: "" },
    { inputType: "", inputValue: "" },
    { inputType: "", inputValue: "" },
    { inputType: "", inputValue: "" },
    { inputType: "", inputValue: "" },
  ]);

  /// a function that is sent to InputChooser that allows user to
  // add inputs to their form as they write

  const addInputType = (inputType) => {
    if (inputArray.length < 10) {
      const placeHoldArray = inputArray;
      placeHoldArray.push(inputType);
      setInputArray([...placeHoldArray]);
    }
  };

  // a function that creates an array with state that has been raised from input children components
  // - it gets the data from inputs that were created dynamically

  const sendStateToParent = (inputOrder, inputType, inputValue) => {
    const placeHoldArray = articleBuild;
    placeHoldArray[inputOrder] = { inputType, inputValue };
    setArticleBuild([...placeHoldArray]);
  };

  // a function that gathers input data from articleBuild state
  // it should create a single object with all of the article pieces stored in order of creation
  // it then pushes data from state to firebase using the
  // imported(locally) dbpush() function
  const handleSubmit = function (event) {
    event.preventDefault();

    const post = {};
    // filter out empty inputs in state, for each input add them to the post object and name them by index (they would be named by type but would overwrite because of duplication)
    articleBuild
      .filter((input) => input.inputValue)
      .forEach((input, index) => (post["index" + index] = input));

    // get userName from parent state, add to article
    post.author = user.userName;

    db.pushArticle(post);

    setInputArray([]);
    setSubmitted(true);
  };

  // The Publish return only looks complicated because it is returning elements
  // to the page that are dynamic in nature. <InputChooser/> is not dynamic and returns a menu with four options that let the user build their blog.
  // that input is stored in an array and returned to the page via a switch function
  // with each case returning one of the options via a different component

  return user.userLoggedIn ? (
    <>
      <section>
        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <ul className="inputContainer">
              {inputArray.map((input, index) => {
                return (() => {
                  switch (input) {
                    case "title":
                      return (
                        <li key={index}>
                          <TitleInput
                            inputOrder={index}
                            inputType={"title"}
                            handleInput={sendStateToParent}
                            parentState={articleBuild}
                          />
                        </li>
                      );

                    case "subTitle":
                      return (
                        <li key={index}>
                          <SubTitleInput
                            inputOrder={index}
                            inputType={"subTitle"}
                            handleInput={sendStateToParent}
                            parentState={articleBuild}
                          />
                        </li>
                      );

                    case "image":
                      return (
                        <li key={index}>
                          <ImageInput
                            inputOrder={index}
                            inputType={"image"}
                            handleInput={sendStateToParent}
                            parentState={articleBuild}
                          />
                        </li>
                      );

                    case "body":
                      return (
                        <li key={index}>
                          <BodyInput
                            inputOrder={index}
                            inputType={"body"}
                            handleInput={sendStateToParent}
                            parentState={articleBuild}
                          />
                        </li>
                      );

                    default:
                      return null;
                  }
                })();
              })}
            </ul>

            <InputChooser addInputType={addInputType} />

            <button>Publish</button>
          </form>
        ) : (
          <div className="submitted">
            <h6>Your blog has been published!</h6>
            <p>
              You can view it among other recent posts{" "}
              <Link className="submittedButton" to="/">
                HERE
              </Link>
            </p>
          </div>
        )}
      </section>
    </>
  ) : (
    <h3 className="pleaseLog">Please Login before Publishing</h3>
  );
};

export default Publish;
