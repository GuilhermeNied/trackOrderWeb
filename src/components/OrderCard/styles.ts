import { Button, Stack, styled, Typography } from "@mui/material";

export const OrderCardContainer = styled(Stack)({
  position: 'relative',
  width: '70rem',
  minWidth: '10rem',
  background: 'var(--grey-500)',
  padding: '2.5rem',
  borderRadius: '1.5rem',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '5rem'
})

const DefaultTypography = styled(Typography)({
  fontSize: '1.2rem',
  color: 'var(--white)'
})

export const NormalTypography = styled(DefaultTypography)({
  fontWeight: '500',
  color: 'var(--grey-800)'
})

export const BoldTypography = styled(DefaultTypography)({
  fontWeight: '700'
})

export const DeleteOrderButton = styled(Button)({
  color: 'var(--red)',
  width: '40px',
  height: '40px',
  borderRadius: '50%',
})
