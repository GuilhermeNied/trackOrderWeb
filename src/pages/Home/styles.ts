import { styled } from "@mui/material";
import { Stack } from "@mui/system";

export const AddNewOrderButton = styled("button")({
  width: "75px",
  height: "75px",
  position: "absolute",
  right: "2rem",
  bottom: "1.2rem",

  background: "var(--gray-500)",
  border: 0,
  borderRadius: "50%",
  // boxShadow: '4px 10px 124px -2px rgba(0,0,0,1)',

  cursor: "pointer",

  "& .NewOrderIcon": {
    color: "var(--purple-600)",
  },

  "&:hover": {
    border: "2px solid var(--purple-600)",
    filter: "brightness(0.95)",
  },

  "@media (max-width: 700px)": {
    width: "100%",
    height: "3rem",
    bottom: 0,
    right: 0,

    textAlign: "center",
    borderRadius: 0,
  },
});

export const OrdersContainer = styled(Stack)({
  alignItems: "center",
  marginTop: "5rem",
  flex: "1",
  gap: "2rem",
});

export const HomeContainer = styled(Stack)({
  overflowY: "auto",
  height: "100vh",
  paddingBottom: "5rem",
  "&::-webkit-scrollbar": {
    background: "var(--gray-700)",
    width: "0.6rem",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "var(--gray-500)",
    borderRadius: "3rem",
  },

  "@media (max-width: 700px)": {
    paddingBottom: "8rem",
    "&::-webkit-scrollbar": {
      background: "transparent",
      width: "0",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "transparent",
      borderRadius: "0",
    },
  },
});
