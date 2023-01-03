import { Box, Modal, Stack } from "@mui/material";
import { Plus } from "phosphor-react";
import { AddNewOrderButton, ModalBox, ModalDescription, ModalInput, ModalTitle } from "./styles";

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
        <Stack marginBottom='2rem'>
          <ModalTitle>
            Add your order
          </ModalTitle>

          <ModalDescription>
            Add your order to track how its delivery is going
          </ModalDescription>
        </Stack>
        <ModalInput />
        <ModalInput />
        <ModalInput multiline rows={3} />
        <Stack alignItems='flex-end' marginTop='3rem'>
          <AddNewOrderButton>
            <Plus size={20} weight='bold' />
            Add new Order
          </AddNewOrderButton>
        </Stack>
      </ModalBox>
    </Modal>
  )
}