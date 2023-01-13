import { Modal, Stack } from "@mui/material";
import { Pencil, X } from "phosphor-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { OrdersContext } from "../../../../contexts/OrdersContext";
import { updateOrder } from "../../../../services/updateOrderService";
import {
  CloseModalButton,
  CloseModalButtonContainer,
  FormModal,
  ModalBox,
  ModalInput,
  ModalTitle,
  OrderModalButton
} from "../../styles";

interface EditOrderModalProps {
  trackingCode: string
  title: string
  description: string
}

export function EditOrderModal({ trackingCode, title, description }: EditOrderModalProps) {
  const { register, handleSubmit, reset } = useForm()
  const { isEditOrderModalOpen, closeEditOrderModal } = useContext(OrdersContext)

  function handleCloseEditModal() {
    closeEditOrderModal(false)
  }

  function handleEditOrder(formData: any) {
    const order = {
      trackingCode: trackingCode,
      title: formData.title,
      description: formData.description
    }
    updateOrder(order)
    window.location.reload() //review this
    reset()
    handleCloseEditModal()
  }

  return (
    <Modal
      open={isEditOrderModalOpen}
      onClose={handleCloseEditModal}
    >
      <ModalBox>
        <CloseModalButtonContainer>
          <CloseModalButton onClick={handleCloseEditModal}>
            <X size={28} />
          </CloseModalButton>
        </CloseModalButtonContainer>
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