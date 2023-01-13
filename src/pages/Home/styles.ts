import { styled } from "@mui/material";
import { Stack } from "@mui/system";

export const AddNewOrderButton = styled("button")({
  width: "75px",
  height: "75px",
  position: "absolute",
  right: "2rem",
  bottom: "2rem",

  background: "var(--grey-500)",
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
});

export const OrdersContainer = styled(Stack)({
  alignItems: "center",
  marginTop: "5rem",
  flex: "1",
  gap: "2rem",
});
