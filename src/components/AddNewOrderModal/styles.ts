import { Box, Button, styled, TextField, Typography } from '@mui/material'

export const ModalBox = styled(Box)({
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: '40vw',
  padding: '3rem 5rem',
  background: 'var(--grey-700)',
  borderRadius: '1.2rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
})

export const ModalInput = styled(TextField)({
  border: '1.5px solid var(--grey-800)',
  borderRadius: '0.3rem',
  color: 'var(--white)',

  minWidth: '5rem',
  '&:focus-within': {
    outline: '2px solid var(--purple-600)'
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none'
  },
  '& .MuiOutlinedInput-input': {
    color: 'var(--white)'
  },
  '& .MuiOutlinedInput-input::placeholder': {
    color: 'var(--white)'
  }
})

export const ModalTitle = styled(Typography)({
  fontSize: '2rem',
  fontWeight: '700',
  color: 'var(--white)'
})

export const ModalDescription = styled(Typography)({
  fontSize: '1.3rem',
  fontWeight: '500',
  color: 'var(--grey-500)'
})

export const AddNewOrderButton = styled(Button)({
  color: 'var(--white)',
  fontWeight: '700',
  fontSize: '0.85rem',
  padding: '0.75rem',
  background: 'var(--purple-600)',
  border: 0,
  borderRadius: '25px',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '0.50rem',
  textAlign: 'center',
  '&:hover' : {
    filter: 'brightness(0.9)',
    background: 'var(--purple-600)'
  }
})


export const CloseModalButton = styled(Button)({
  width: '60px',
  height: '60px',
  background: 'none',
  borderRadius: '50%',

  color: 'var(--white)',

  '&:hover': {
    background: 'rgba(118, 5, 255, 0.2)',
  }
})