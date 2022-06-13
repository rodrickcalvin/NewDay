import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./component-styles.scss";

const Modal = ({ display, close }) => {
  const [feedback, setFeedback] = useState("");
  // default to modal to null or non-existent when false
  // hence it doesn't appear
  if (!display) return null;

  // function to print out feedback and close modal
  const handleDone = () => {
    console.log(feedback);
    return close;
  };

  return (
    <div className="overlay">
      <div className="modal">
        <div className="modal-header">
          <h3>Modal Heading</h3>
          <FontAwesomeIcon
            icon={faXmark}
            size="2xl"
            className="close-icon"
            onClick={close}
          />
        </div>
        <div className="modal-body">
          <a
            href="https://www.rodrickwamala.me"
            target="_blank"
            rel="noreferrer"
            className="image-link"
          >
            <img
              src="https://res.cloudinary.com/rodrick/image/upload/v1654868572/Personal%20website/logos/rodrick-UI_sft8wl.png"
              alt="rodrick logo"
            />
          </a>
          <p className="image-description">
            <span role="img" aria-label="look-up">
              🫵🫵🫵☝☝☝☝☝☝☝☝☝🫵🫵🫵
            </span>
            <br />
            Click on the image to see my currently being built website...
          </p>

          <form>
            <textarea
              className="feedback-input"
              placeholder="Please input your feedback"
              value={feedback}
              onInput={(e) => setFeedback(e.target.value)}
            />
          </form>
        </div>
        <div className="modal-footer">
          <button onClick={handleDone}>Done</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
