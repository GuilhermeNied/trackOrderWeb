import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";

export const ModalBox = styled(Box)({
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: "40vw",
  padding: "3rem 5rem",
  background: "var(--gray-700)",
  borderRadius: "1.2rem",

  display: "flex",
  flexDirection: "column",
  gap: "1rem",

  "@media (max-width: 700px)": {
    flex: 1,
    width: "100%",
    bottom: 0,
    right: 0,
    height: "100vh",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
  },
});

export const ModalInput = styled(TextField)({
  border: "1.5px solid var(--gray-800)",
  borderRadius: "0.3rem",
  color: "var(--white)",

  minWidth: "5rem",
  "&:focus-within": {
    outline: "2px solid var(--purple-600)",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
  "& .MuiOutlinedInput-input": {
    color: "var(--white)",
  },
  "& .MuiOutlinedInput-input::placeholder": {
    color: "var(--white)",
  },
});

export const ModalTitle = styled(Typography)({
  fontSize: "2rem",
  fontWeight: "700",
  color: "var(--white)",
});

export const ModalDescription = styled(Typography)({
  fontSize: "1.3rem",
  fontWeight: "500",
  color: "var(--gray-500)",
});

export const OrderModalButton = styled(Button)({
  color: "var(--white)",
  fontWeight: "700",
  fontSize: "0.85rem",
  padding: "0.75rem",
  background: "var(--purple-600)",
  border: 0,
  borderRadius: "25px",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "0.50rem",
  textAlign: "center",
  "&:hover": {
    filter: "brightness(0.9)",
    background: "var(--purple-600)",
  },

  "@media (max-width: 700px)": {
    width: "15rem",
  },
});

export const CloseModalButton = styled(Button)({
  width: "60px",
  height: "60px",
  background: "none",
  borderRadius: "50%",

  color: "var(--white)",

  "&:hover": {
    background: "rgba(118, 5, 255, 0.2)",
  },
});

export const FormModal = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
});

export const CloseModalButtonContainer = styled(Stack)({
  alignItems: "flex-end",
  position: "absolute",
  right: "1rem",
  top: "1rem",
});
