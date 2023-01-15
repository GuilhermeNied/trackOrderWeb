import { Button, Stack, styled, Typography } from "@mui/material";

export const OrderCardContainer = styled(Stack)({
  position: "relative",
  width: "30rem",
  minWidth: "50%",
  background: "var(--grey-500)",
  padding: "2.5rem",
  borderRadius: "1.5rem",
  flexDirection: "row",
  justifyContent: "space-between",
  gap: "5rem",
});

const DefaultTypography = styled(Typography)({
  fontSize: "1.2rem",
  color: "var(--white)",
});

export const NormalTypography = styled(DefaultTypography)({
  fontWeight: "500",
  color: "var(--grey-800)",
});

export const BoldTypography = styled(DefaultTypography)({
  fontWeight: "700",
});

export const DeleteOrderButton = styled(Button)({
  color: "var(--purple-600)",
  width: "40px",
  height: "40px",
  borderRadius: "50%",
});

export const MenuContainer = styled(Stack)({
  position: "absolute",
  right: "0",
  top: "0.2rem",
  paddingBottom: "1rem",

  "& .MuiPaper-root": {
    background: "var(--grey-700)",
  },
});

export const OpenMenuButton = styled(Button)({
  color: "var(--purple-600)",
  background: "none",
  "&:hover": {
    filter: "brightness(0.9)",
  },
});
