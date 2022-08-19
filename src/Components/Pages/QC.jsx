import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const QC = () => {
  return (
    <Grid container maxWidth="900px" m="auto">
      <Grid item xs={12} sm={12} md={12}>
        <Box className="box-qc">
          <img src="https://dep.com.vn/wp-content/uploads/2022/07/BannerDOL268-Done.gif" width="100%" height="auto" alt="" />
        </Box>
      </Grid>
    </Grid>
  )
}

export default QC
