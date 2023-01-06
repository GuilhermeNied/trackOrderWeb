import { Box, Button, FormControl, Modal, Stack } from "@mui/material";
import { Plus, X } from "phosphor-react";
import { useForm } from "react-hook-form";
import { api } from "../../api";
import { AddNewOrderButton, CloseModalButton, FormModal, ModalBox, ModalDescription, ModalInput, ModalTitle } from "./styles";

interface AddNewOrderModalProps {
  open: boolean;
  handleCloseModal: () => void
}

interface OrderForm {
  trackingCode: string
  title: string
  description: string
}

export function AddNewOrderModal({ handleCloseModal, open }: AddNewOrderModalProps) {
  const { register, handleSubmit, reset } = useForm()
  function handleAddNewOrder(data: OrderForm) {
    api.post('/createOrder', {
      trackingCode: data.trackingCode,
      title: data.title,
      description: data.description
    })
    handleCloseModal()
    reset()
  }


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
        <FormModal onSubmit={handleSubmit(handleAddNewOrder())}>
          <ModalInput {...register("trackingCode")} placeholder="Tracking Code*" />
          <ModalInput {...register("title")} placeholder="Title*" />
          <ModalInput {...register("description")} multiline rows={3} placeholder="Description" />
          <Stack alignItems='flex-end' marginTop='3rem'>
            <AddNewOrderButton type="submit">
              <Plus size={18} weight='bold' />
              Add new Order
            </AddNewOrderButton>
          </Stack>
        </FormModal>
      </ModalBox>
    </Modal>
  )
}