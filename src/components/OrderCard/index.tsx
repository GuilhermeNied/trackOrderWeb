import { Stack } from "@mui/material";
import { BoldTypography, NormalTypography, OrderCardContainer } from "./styles";

export function OrderCard() {
  return (
    <OrderCardContainer>
      <Stack gap='1rem'>
        <Stack >
          <BoldTypography>
            Tracking Code:
          </BoldTypography>
          <NormalTypography>
            Tracking Code
          </NormalTypography>
        </Stack>


        <Stack>
          <BoldTypography>
            Title:
          </BoldTypography>
          <NormalTypography>
            Title
          </NormalTypography>
        </Stack>


      </Stack>

      <Stack>
        <BoldTypography>
          Description:
        </BoldTypography>
        <NormalTypography sx={{ wordBreak: 'break-word' }}>
          Description
        </NormalTypography>
      </Stack>
    </OrderCardContainer>
  )
}