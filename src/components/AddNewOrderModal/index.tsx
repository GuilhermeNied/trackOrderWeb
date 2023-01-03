import { Box, Button, Modal, Stack } from "@mui/material";
import { Plus, X } from "phosphor-react";
import { AddNewOrderButton, CloseModalButton, ModalBox, ModalDescription, ModalInput, ModalTitle } from "./styles";

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
        <Stack alignItems='flex-end' position='absolute' right='1rem' top='1rem'>
          <CloseModalButton onClick={handleCloseModal}>
            <X size={28} />
          </CloseModalButton>
        </Stack>
        <Stack marginBottom='2rem'>
          <ModalTitle>
            Add your order
          </ModalTitle>
          <ModalDescription>
            Add your order to track how its delivery is going
          </ModalDescription>
        </Stack>
        <ModalInput placeholder="Tracking Code*" />
        <ModalInput placeholder="Title*" />
        <ModalInput multiline rows={3} placeholder="Description" />
        <Stack alignItems='flex-end' marginTop='3rem'>
          <AddNewOrderButton>
            <Plus size={18} weight='bold' />
            Add new Order
          </AddNewOrderButton>
        </Stack>
      </ModalBox>
    </Modal>
  )
}