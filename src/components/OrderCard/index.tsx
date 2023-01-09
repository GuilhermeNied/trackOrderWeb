import { Stack } from "@mui/material";
import { Pencil, Trash } from "phosphor-react";
import { api } from "../../api";
import {
  BoldTypography,
  DeleteOrderButton,
  NormalTypography,
  OrderCardContainer
} from "./styles";

interface OrderCardProps {
  trackingCode: string
  title: string
  description: string
  handleEditOrder: (trackingCode: string) => void
}

export function OrderCard({ trackingCode, title, description, handleEditOrder }: OrderCardProps) {
  async function handleDeleteOrder(trackingCode: string) {
    await api.delete(`/deleteOrder/${trackingCode}`, { params: { trackingCode } })
  }

  return (
    <OrderCardContainer>
      <Stack position='absolute' right='0' top='0.2rem' paddingBottom='1rem' >
        <DeleteOrderButton onClick={() => handleDeleteOrder(trackingCode)}>
          <Trash size={18} />
        </DeleteOrderButton>
        <DeleteOrderButton onClick={() => handleEditOrder(trackingCode)}>
          <Pencil size={18} />
        </DeleteOrderButton>
      </Stack>
      <Stack gap='1rem'>
        <Stack >
          <BoldTypography>
            Tracking Code:
          </BoldTypography>
          <NormalTypography>
            {trackingCode}
          </NormalTypography>
        </Stack>

        <Stack>
          <BoldTypography>
            Title:
          </BoldTypography>
          <NormalTypography>
            {title}
          </NormalTypography>
        </Stack>
      </Stack>

      <Stack>
        <BoldTypography>
          Description:
        </BoldTypography>
        <NormalTypography sx={{ wordBreak: 'break-word' }}>
          {description}
        </NormalTypography>
      </Stack>
    </OrderCardContainer>
  )
}