import { Modal, Stack } from "@mui/material";
import { Plus, X } from "phosphor-react";
import { useForm } from "react-hook-form";
import { createOrder } from "../../../../services/createOrderService";
import { CloseModalButton, FormModal, ModalBox, ModalDescription, ModalInput, ModalTitle, OrderModalButton } from "../../styles";

interface AddNewOrderModalProps {
  open: boolean;
  handleCloseModal: () => void
}

export function AddNewOrderModal({ handleCloseModal, open, }: AddNewOrderModalProps) {
  const { register, handleSubmit, reset } = useForm()

  function handleAddNewOrder(data: any) {
    const order = {
      trackingCode: data.trackingCode,
      title: data.title,
      description: data.description,
    }
    createOrder(order)

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
        <FormModal onSubmit={handleSubmit(handleAddNewOrder)}>
          <ModalInput {...register("trackingCode")} placeholder="Tracking Code*" />
          <ModalInput {...register("title")} placeholder="Title*" />
          <ModalInput {...register("description")} multiline rows={3} placeholder="Description" />
          <Stack alignItems='flex-end' marginTop='3rem'>
            <OrderModalButton type="submit">
              <Plus size={18} weight='bold' />
              Add new Order
            </OrderModalButton>
          </Stack>
        </FormModal>
      </ModalBox>
    </Modal>
  )
}