import { useEffect, useState } from "react";
import Modal from "./components/modal";
import "./styles.scss";

/*

Interview Task:

Create a WCAG 2.1 AA Compliant Modal

Put any content you want in the modal,
ensure it is dismissable or closable,
include comments to help us understand
your choices, the modal must prevent 
interaction with the underlying page
until dismissed or actioned

Write some tests to confirm that the
modal works and is compliant

Create some styles, remember any styles,
should also be WCAG 2.1 AA Compliant

NB: Getting the task done is more important than
it being complete, don't worry about impelementing 
the solution in a single file

Feel free to add libraries on the left,
the test runner is in a tab on the right

*/

export default function App() {
  const [displayModal, setDisplayModal] = useState(false);

  // Disable vertical scrolling when modal is active or displayed
  useEffect(() => {
    displayModal
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "visible");
  }, [displayModal]);

  return (
    <div className="App">
      <h1>NewDay Modal</h1>
      <button
        aria-pressed
        className="toggle-button"
        onClick={() => setDisplayModal(true)}
      >
        Open Portfolio Link
      </button>
      {/* unsplash image to help with the scroll testing */}
      <div>
        <img
          src="https://images.unsplash.com/photo-1654785009042-1490ef1c876a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          alt="Building with its reflection seen in a pool of water"
        />
      </div>
      <Modal display={displayModal} close={() => setDisplayModal(false)} />
    </div>
  );
}
