import { Modal, Stack } from "@mui/material";
import { Plus, X } from "phosphor-react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { OrdersContext } from "../../../../contexts/OrdersContext";
import { createOrder } from "../../../../services/createOrderService";
import { CloseModalButton, CloseModalButtonContainer, FormModal, ModalBox, ModalDescription, ModalInput, ModalTitle, OrderModalButton } from "../../styles";

export function AddNewOrderModal() {
  const { register, handleSubmit, reset } = useForm()
  const { isNewOrderModalOpen, closeNewOrderModal } = useContext(OrdersContext)
  function handleCloseNewOrderModal() {
    closeNewOrderModal(false)
  }

  function handleAddNewOrder(data: any) {
    const order = {
      trackingCode: data.trackingCode,
      title: data.title,
      description: data.description,
    }
    createOrder(order)

    handleCloseNewOrderModal()
    reset()
  }

  return (
    <Modal
      open={isNewOrderModalOpen}
      onClose={handleCloseNewOrderModal}
    >
      <ModalBox>
        <CloseModalButtonContainer>
          <CloseModalButton onClick={handleCloseNewOrderModal}>
            <X size={28} />
          </CloseModalButton>
        </CloseModalButtonContainer>
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