import Modal from "./Modal";

export default function DeleteCardModal(props) {
  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="deleteCardModal">
        <h1>Are you sure?</h1>
        <p>This card will be deleted permanently.</p>
        <div>
          <button className="btn btn-danger" onClick={props.onDeleteCard}>
            Delete
          </button>
          <button className="btn btn-primary" onClick={props.onClose}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}
