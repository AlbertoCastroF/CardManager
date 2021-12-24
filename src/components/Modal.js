import ReactDOM from "react-dom";

import "./styles/Modal.css";

export default function Modal(props) {
  return (
    <>
      {props.isOpen &&
        ReactDOM.createPortal(
          <div className="modal">
            <div className="modal__container">
              {/* THIS BUTTON CLOSES THE MODAL AND EXECUTES THE FUNCTION HANLDE CLOSE MODAL*/}
              <button onClick={props.onClose} className="modal__close-button">
                X
              </button>
              {/* RENDERING THE CHILDREN OF MODAL FOUND IN THE COMPONENT DELETECARDMODAL */}
              {props.children}
            </div>
          </div>,
          document.getElementById("modal")
        )}
    </>
  );
}
