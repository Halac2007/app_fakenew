import AccountCircle from '@mui/icons-material/AccountCircle'
import { AppBar, IconButton, Toolbar } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'
import MenuList from '../../Components/Header/MenuList'

import Searchs from './Searchs'

const menus = [
  { id: 1, title: 'Kỷ nguyên số', url: '/chuyen-muc/ky-nguyen-so' },
  { id: 2, title: 'Ăn sạch sống khỏe', url: '/chuyen-muc/an-sach-song-khoe' },
  { id: 3, title: 'Xe và luật', url: '/chuyen-muc/xe-va-luat' },
]

const Header = () => {
  return (
    <>
      <AppBar position="static" sx={{ background: '#fff', borderBottom: '1px solid #ede7f6', height: 60, marginBottom: '10px' }}>
        <Container maxWidth="xl">
          <Toolbar sx={{ maxWidth: '900px', m: 'auto' }}>
            <Link to="/">
              <img src="https://static-cms-plo.zadn.vn/v3/web/styles/img/logo.png" alt="" height={'30px'} />
            </Link>
            <MenuList menus={menus} />
            <Searchs />
            <IconButton
              size="large"
              color="default"
              sx={{
                display: {
                  xs: 'none',
                  sm: 'none',
                  md: 'block',
                },
              }}
            >
              <AccountCircle />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Header
