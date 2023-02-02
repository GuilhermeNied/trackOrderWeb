import { Button, Menu, MenuItem, Stack } from "@mui/material";
import { DotsThreeVertical, Pencil, Trash } from "phosphor-react";
import { useState } from "react";
import { deleteOrderByTrackingCode } from "../../services/deleteOrderByTrackingCodeService";
import {
  BoldTypography,
  DeleteOrderButton,
  MenuContainer,
  NormalTypography,
  OpenMenuButton,
  OrderCardContainer
} from "./styles";

interface OrderCardProps {
  trackingCode: string
  title: string
  description: string
  editOrder: (trackingCode: string) => any
}

export function OrderCard({ trackingCode, title, description, editOrder }: OrderCardProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState(null)
  async function deleteOrder(trackingCode: string) {
    deleteOrderByTrackingCode(trackingCode)
  }

  function handleOpenMenu(event: any) {
    setAnchorEl(event.currentTarget)
    setIsMenuOpen(true)
  }

  function handleCloseMenu() {
    setIsMenuOpen(false)
  }

  function handleDeleteOrder() {
    deleteOrder(trackingCode)
    handleCloseMenu()
    window.location.reload() // review this
  }

  function handleEditOrder() {
    editOrder(trackingCode)
    handleCloseMenu()
  }

  return (
    <OrderCardContainer>
      <MenuContainer>
        <OpenMenuButton onClick={handleOpenMenu}>
          <DotsThreeVertical size={20} weight='bold' />
        </OpenMenuButton>
        <Menu
          open={isMenuOpen}
          anchorEl={anchorEl}
          onClose={handleCloseMenu}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          transformOrigin={{ horizontal: "center", vertical: "top" }}
          PaperProps={{
            sx: {
              background: 'var(--gray-500)',
              borderRadius: '1.5rem'
            }
          }}
        >
          <MenuItem onClick={handleDeleteOrder} sx={{ color: 'var(--white)', fontWeight: '700' }}>
            <DeleteOrderButton>
              <Trash size={18} />
            </DeleteOrderButton>
            Delete
          </MenuItem>
          <MenuItem onClick={handleEditOrder} sx={{ color: 'var(--white)', fontWeight: '700' }}>
            <DeleteOrderButton >
              <Pencil size={18} />
            </DeleteOrderButton>
            Edit
          </MenuItem>
        </Menu>
      </MenuContainer>
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