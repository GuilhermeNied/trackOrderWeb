import { Box, Modal } from "@mui/material";
import { ModalBox, ModalInput } from "./styles";

interface AddNewOrderModalProps {
  open: boolean;
  handleCloseModal: () => void
}

export function AddNewOrderModal({ handleCloseModal, open }: AddNewOrderModalProps) {
  return (
    <Modal
      open={open}
      onClose={handleCloseModal}
    >
      <ModalBox>
        <ModalInput />
        <ModalInput />
        <ModalInput />
      </ModalBox>
    </Modal>
  )
}