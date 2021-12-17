import ReactDOM from "react-dom";
import "./styles/Modal.css";

export default function Modal(props) {
  return (
    <>
      {props.isOpen &&
        ReactDOM.createPortal(
          <div className="modal">
            <div className="modal__container">
              <button onClick={props.onClose} className="modal__close-button">
                X
              </button>
              {props.children}
            </div>
          </div>,
          document.getElementById("modal")
        )}
    </>
  );
}
