import { Box, styled, TextField } from '@mui/material'

export const ModalBox = styled(Box)({
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '30vw',
  padding: '2rem',
  background: 'var(--grey-700)',

  display: 'flex',
  flexDirection: 'column',
  gap: '1rem'
})

export const ModalInput = styled(TextField)({
  border: '1px solid var(--grey-800)',
  borderRadius: '0.3rem',
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  }
})
