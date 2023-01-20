import { Modal as RBModal } from "react-bootstrap";
import { ButtonCancel, ButtonSave, ModalFrame } from "./styles";
import { ModalProps } from "./types";

export const ModalStyled = ({
  show,
  handleClose,
  handleConfirm,
  children,
  props,
}: ModalProps) => {
  return (
    <RBModal
      style={{ zIndex: "10000", padding: 0 }}
      show={show}
      centered
      contentClassName="border-0"
      dialogClassName="modal-100w"
      size="lg"
    >
      <ModalFrame>
        <RBModal.Body>{children}</RBModal.Body>
        <RBModal.Footer className="border-0">
          <ButtonCancel onClick={handleClose}>Cancelar</ButtonCancel>
          <ButtonSave type="button" onClick={handleConfirm}>Salvar</ButtonSave>
        </RBModal.Footer>
      </ModalFrame>
    </RBModal>
  );
};
