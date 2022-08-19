import { Grid, Link, Typography } from '@mui/material'
import React from 'react'

const Postxevaluat = (props) => {
  return (
    <>
      <Grid container maxWidth="1200px" paddingTop="20px" spacing={1} margin="auto" className="main-cate">
        <Grid container item xs={12} sm={12} md={12}>
          <Typography
            sx={{
              textAlign: 'center',

              margin: '3% 0',

              textTransform: 'uppercase',
              typography: {
                xs: {
                  fontSize: '1.5rem',
                  paddingLeft: '15vh',
                },
                sm: {
                  paddingTop: '2vh',
                  paddingLeft: '40vh',
                  fontSize: '2rem',
                },
                md: {
                  paddingTop: '2vh',
                  fontSize: '3rem',
                  paddingLeft: '50vh',
                },
              },
            }}
          >
            Xe và luật
          </Typography>
        </Grid>
        <Grid container item xs={12} sm={5} md={4}>
          {props.rightx.map((item) => (
            <Grid key={Math.random()} item xs={11.5}>
              <Link href={item.link} sx={{ textDecoration: 'none', color: '#212529' }}>
                <img src={item.image} width="100%" height="auto" alt="" />

                <Typography
                  sx={{
                    textTransform: 'uppercase',
                    fontSize: '12px',
                    width: '50%',
                    textAlign: 'center',
                    marginBottom: '8px',
                    marginTop: '16px',
                    borderLeft: '1px solid #333',
                    borderRight: '1px solid #333',
                    paddingLeft: '10px',
                    marginLeft: '5vh',
                    typography: {
                      xs: {
                        marginLeft: '15vh',
                      },
                    },
                  }}
                >
                  Xe và luật
                </Typography>
                <Typography sx={{ textTransform: 'uppercase', fontSize: '1.2rem', textAlign: 'center', padding: '2rem 0' }}>
                  {item.title}
                </Typography>
              </Link>
            </Grid>
          ))}
        </Grid>
        <Grid container item spacing={2} xs={12} sm={7} md={8}>
          <Grid container item spacing={{ xs: 2, sm: 2, md: 3, lg: 3 }} columns={{ xs: 4, sm: 6, md: 12 }}>
            <Grid item xs={12} sm={2} md={4}>
              {props.carchild1.map((item) => (
                <Link key={Math.random()} href={item.link} sx={{ textDecoration: 'none', color: '#212529' }} className="box-item">
                  <img src={item.image} width="100%" height="auto" alt="" />

                  <Typography>{item.title}</Typography>
                </Link>
              ))}
            </Grid>
            <Grid item xs={12} sm={2} md={4}>
              {props.carchild2.map((item) => (
                <Link key={Math.random()} href={item.link} sx={{ textDecoration: 'none', color: '#212529' }} className="box-item">
                  <img src={item.image} width="100%" height="auto" alt="" />

                  <Typography>{item.title}</Typography>
                </Link>
              ))}
            </Grid>
            <Grid item xs={12} sm={2} md={4}>
              {props.carchild3.map((item) => (
                <Link key={Math.random()} href={item.link} sx={{ textDecoration: 'none', color: '#212529' }} className="box-item">
                  <img src={item.image} width="100%" height="auto" alt="" />

                  <Typography>{item.title}</Typography>
                </Link>
              ))}
            </Grid>
          </Grid>
          <Grid container item spacing={{ xs: 2, sm: 2, md: 3, lg: 3 }} columns={{ xs: 4, sm: 6, md: 12 }}>
            <Grid item xs={12} sm={2} md={4}>
              {props.carchild4.map((item) => (
                <Link key={Math.random()} href={item.link} sx={{ textDecoration: 'none', color: '#212529' }} className="box-item">
                  <img src={item.image} width="100%" height="auto" alt="" />

                  <Typography>{item.title}</Typography>
                </Link>
              ))}
            </Grid>
            <Grid item xs={12} sm={2} md={4}>
              {props.carchild5.map((item) => (
                <Link key={Math.random()} href={item.link} sx={{ textDecoration: 'none', color: '#212529' }} className="box-item">
                  <img src={item.image} width="100%" height="auto" alt="" />

                  <Typography>{item.title}</Typography>
                </Link>
              ))}
            </Grid>
            <Grid item xs={12} sm={2} md={4}>
              {props.carchild6.map((item) => (
                <Link key={Math.random()} href={item.link} sx={{ textDecoration: 'none', color: '#212529' }} className="box-item">
                  <img src={item.image} width="100%" height="auto" alt="" />

                  <Typography>{item.title}</Typography>
                </Link>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default Postxevaluat
