import Modal from "./Modal";

export default function DeleteCardModal(props) {
  return (
    //IF THE PROP ISOPEN IS TRUE WE SHOW THE MODAL WITH THE ISOPEN EVENT THAT COMES FROM THE CARDDETAILSCONTAINER COMPONENT
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className="deleteCardModal">
        <h1>Are you sure?</h1>
        <p>This card will be deleted permanently.</p>
        <div>
          {/* THIS BUTTON EXECUTES THE  HANDLEDELETECARD FUNCTION THAT COMES FROM CARDDETAILSCONTAINER COMPONENT AND DELETES THE CARD*/}
          <button className="btn btn-danger" onClick={props.onDeleteCard}>
            Delete
          </button>
          {/* THIS BUTTON EXECUTES THE FUNCTION HANDLE CLOSE MODAL THAT COMES FROM CARDDETAILSCONTAINER AND SETS MODALISOPEN TO FALSE */}
          <button className="btn btn-primary" onClick={props.onClose}>
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
}
