import { Grid, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const CatePost = (props) => {
  return (
    <>
      <Grid container maxWidth="auto" spacing={4}>
        <Grid container item xs={12} sm={12} md={12}>
          {props.toppost.map((item) => (
            <Grid item key={Math.random()} xs={12} sm={12} md={12}>
              <Link href={item.link} sx={{ textDecoration: 'none', color: '#212529' }} className="box-top">
                <Typography
                  sx={{
                    typography: {
                      md: {
                        position: 'absolute',
                        backgroundColor: 'rgba(255, 255, 255, 0.54)',
                        height: '125px',
                        width: '500px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',

                        top: '50vh',
                        left: '50vh',
                        padding: '10px',
                        fontSize: '1.5rem',
                        textAlign: 'center',
                      },
                      sm: {
                        position: 'absolute',
                        backgroundColor: 'rgba(255, 255, 255, 0.54)',
                        height: '90px',
                        width: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '20vh',
                        fontSize: '1rem',
                        textAlign: 'center',
                      },
                      xs: {
                        position: 'absolute',
                        backgroundColor: 'rgba(255, 255, 255, 0.54)',
                        height: '90px',
                        width: 'auto',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        margin: '2vh',
                        fontSize: '1rem',
                        textAlign: 'center',
                        padding: '5px',
                      },
                    },
                  }}
                  fontWeight="700"
                >
                  {item.title}
                </Typography>
                <Box className="img-top">
                  <img src="https://dep.com.vn/wp-content/uploads/2022/08/U40.jpg" width="100%" height="auto" alt="" />
                </Box>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container maxWidth="1200px" spacing={3} margin="auto" className="main-cate">
        <Grid item xs={12} sm={12} md={8} spacing={2}>
          <Typography
            sx={{
              textAlign: 'center',
              fontSize: '3rem',
              textTransform: 'uppercase',
              color: '#333333',
              typography: {
                md: { paddingLeft: '50vh', fontSize: '3rem' },
                sm: { paddingLeft: '20vh', fontSize: '3rem' },
                xs: { paddingLeft: '5vh', fontSize: '1.5rem' },
              },
            }}
          >
            TIN NỔI BẬT
          </Typography>
        </Grid>
        <Grid container item spacing={{ xs: 2, sm: 2, md: 3, lg: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} className="box-hot">
          <Grid item xs={2} sm={4} md={3} className="box-cate-hot">
            {props.hotleft.map((item) => (
              <Link key={Math.random()} href={item.link} sx={{ textDecoration: 'none', color: '#212529' }} className="box-img">
                <img src={item.image} width="100%" height="auto" alt="" />
                <Box sx={{ display: 'flex' }}>
                  <Typography
                    sx={{
                      fontSize: '4rem',
                      fontStyle: 'italic',
                      fontFamily: 'Basker',
                      width: '20%',
                      lineHeight: '1',
                      typography: { xs: { fontSize: '3rem' }, sm: { fontSize: '4rem' }, md: { fontSize: '5rem' } },
                    }}
                  >
                    1
                  </Typography>
                  <Box sx={{ width: '80%' }}>
                    <Typography
                      sx={{
                        textTransform: 'uppercase',
                        fontSize: '12px',
                        marginBottom: '8px',
                        marginTop: '16px',
                        borderLeft: '1px solid #333',
                        paddingLeft: '10px',
                      }}
                    >
                      Kỷ nguyên số
                    </Typography>
                    <Typography>{item.title}</Typography>
                  </Box>
                </Box>
              </Link>
            ))}
          </Grid>
          <Grid item xs={2} sm={4} md={3} className="box-cate-hot">
            {props.rpost.map((item) => (
              <Link key={Math.random()} href={item.link} sx={{ textDecoration: 'none', color: '#212529' }} className="box-img">
                <img src={item.image} width="100%" height="auto" alt="" />
                <Box sx={{ display: 'flex' }}>
                  <Typography
                    sx={{
                      fontSize: '4rem',
                      fontStyle: 'italic',
                      fontFamily: 'Basker',
                      width: '20%',
                      lineHeight: '1',
                      typography: { xs: { fontSize: '3rem' }, sm: { fontSize: '4rem' }, md: { fontSize: '5rem' } },
                    }}
                  >
                    2
                  </Typography>
                  <Box sx={{ width: '80%' }}>
                    <Typography
                      sx={{
                        textTransform: 'uppercase',
                        fontSize: '12px',
                        marginBottom: '8px',
                        marginTop: '16px',
                        borderLeft: '1px solid #333',
                        paddingLeft: '10px',
                      }}
                    >
                      Ăn sạch sống khỏe
                    </Typography>
                    <Typography>{item.title}</Typography>
                  </Box>
                </Box>
              </Link>
            ))}
          </Grid>
          <Grid item xs={2} sm={4} md={3} className="box-cate-hot">
            {props.xpost.map((item) => (
              <Link key={Math.random()} href={item.link} sx={{ textDecoration: 'none', color: '#212529' }} className="box-img">
                <img src={item.image} width="100%" height="auto" alt="" />
                <Box sx={{ display: 'flex' }}>
                  <Typography
                    sx={{
                      fontSize: '4rem',
                      fontStyle: 'italic',
                      fontFamily: 'Basker',
                      width: '20%',
                      lineHeight: '1',
                      typography: { xs: { fontSize: '3rem' }, sm: { fontSize: '4rem' }, md: { fontSize: '5rem' } },
                    }}
                  >
                    3
                  </Typography>
                  <Box sx={{ width: '80%' }}>
                    <Typography
                      sx={{
                        textTransform: 'uppercase',
                        fontSize: '12px',
                        marginBottom: '8px',
                        marginTop: '16px',
                        borderLeft: '1px solid #333',
                        paddingLeft: '10px',
                      }}
                    >
                      Xe và luật
                    </Typography>
                    <Typography>{item.title}</Typography>
                  </Box>
                </Box>
              </Link>
            ))}
          </Grid>
          <Grid item xs={2} sm={4} md={3} className="box-cate-hot">
            {props.hotright.map((item) => (
              <Link key={Math.random()} href={item.link} sx={{ textDecoration: 'none', color: '#212529' }} className="box-img">
                <img src={item.image} width="100%" height="auto" alt="" />
                <Box sx={{ display: 'flex' }}>
                  <Typography
                    sx={{
                      fontSize: '4rem',
                      fontStyle: 'italic',
                      fontFamily: 'Basker',
                      width: '20%',
                      lineHeight: '1',
                      typography: { xs: { fontSize: '3rem' }, sm: { fontSize: '4rem' }, md: { fontSize: '5rem' } },
                    }}
                  >
                    4
                  </Typography>
                  <Box sx={{ width: '80%' }}>
                    <Typography
                      sx={{
                        textTransform: 'uppercase',
                        fontSize: '12px',
                        marginBottom: '8px',
                        marginTop: '16px',
                        borderLeft: '1px solid #333',
                        paddingLeft: '10px',
                      }}
                    >
                      Kỷ nguyên số
                    </Typography>
                    <Typography>{item.title}</Typography>
                  </Box>
                </Box>
              </Link>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default CatePost
