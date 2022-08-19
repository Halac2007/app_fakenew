import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const CatePost = (props) => {
  return (
    <Grid container spacing={2} sx={{ paddingTop: '20px', marginTop: '30px', borderTop: '1px solid #333' }}>
      {props.catepost.map((item) => (
        <Grid key={Math.random()} item xs={4} sm={4} md={3}>
          <img src={item.image} width="100%" height="156px" alt="" />
          <Box>{item.title}</Box>
        </Grid>
      ))}
    </Grid>
  )
}

export default CatePost
