import { Cancel, Print, PrintViews } from "@/Constant";
import { propsTypes } from "@/Type/Contacts";
import { useRef } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import { Button, Modal, ModalBody } from "reactstrap";

const PrintModal = ({ printModal, selectedUser, toggleCallback }: propsTypes) => {
  const printModalToggle = () => {
    toggleCallback(false);
  };

  const contentRef = useRef<HTMLDivElement | null>(null);
  const handlePrint = useReactToPrint({contentRef});
  return (
    <Modal isOpen={printModal} toggle={printModalToggle}>
      <div className="modal-header">
        <h5 className="modal-title">{PrintViews}</h5>
        <Button color="transprant" className="Button-close" onClick={printModalToggle} type="button"></Button>
      </div>
      <ModalBody className="list-persons">
            <Button color="secondary" className="me-1" onClick={()=>handlePrint()}>
              {Print}
            </Button>         
        &nbsp;&nbsp;
        <Button color="primary" onClick={printModalToggle}>
          {Cancel}
        </Button>
      </ModalBody>
    </Modal>
  );
};

export default PrintModal;
