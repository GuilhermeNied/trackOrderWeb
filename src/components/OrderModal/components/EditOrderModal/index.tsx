import { Modal, Stack } from "@mui/material";
import { Pencil, X } from "phosphor-react";
import { useForm } from "react-hook-form";
import { updateOrder } from "../../../../services/updateOrderService";
import {
  CloseModalButton,
  FormModal,
  ModalBox,
  ModalInput,
  ModalTitle,
  OrderModalButton
} from "../../styles";

interface EditOrderModalProps {
  open: boolean;
  handleCloseModal: () => void
  trackingCode: string
  title: string
  description: string
}

export function EditOrderModal({ open, handleCloseModal, trackingCode, title, description }: EditOrderModalProps) {
  const { register, handleSubmit, reset } = useForm()

  function handleEditOrder(formData: any) {
    const order = {
      trackingCode: trackingCode,
      title: formData.title,
      description: formData.description
    }
    updateOrder(order)
    window.location.reload() //review this
    reset()
    handleCloseModal()
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
            Edit your order
          </ModalTitle>
        </Stack>
        <FormModal onSubmit={handleSubmit(handleEditOrder)}>
          <ModalInput {...register("title")} placeholder={title} />
          <ModalInput {...register("description")} multiline rows={3} placeholder={description} />
          <Stack alignItems='flex-end' marginTop='3rem'>
            <OrderModalButton type="submit">
              <Pencil size={18} weight='bold' />
              Edit new Order
            </OrderModalButton>
          </Stack>
        </FormModal>
      </ModalBox>
    </Modal>
  )

}