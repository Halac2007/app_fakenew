import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const MainPosts = (props) => {
  return (
    <Grid item xs={12} sm={8} md={8}>
      {props.mainpost.map((item) => (
        <Box key={Math.random()}>
          <img src={item.image} width="100%" height="426px" alt="" />
          <Box sx={{ typography: 'h4', textAlign: 'center' }}>{item.title}</Box>
        </Box>
      ))}
    </Grid>
  )
}

export default MainPosts
