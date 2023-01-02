import { styled } from '@mui/material'

export const AddNewOrderButton = styled('button')({
  width: '75px',
  height: '75px',
  position: 'absolute',
  right: '2rem',
  bottom: '2rem',

  background: 'var(--grey-500)',
  border: 0,
  borderRadius: '50%',
  // boxShadow: '4px 10px 124px -2px rgba(0,0,0,1)',

  cursor: 'pointer',

  '&:first-child': {
    color: 'var(--purple-600)'
  }
})
