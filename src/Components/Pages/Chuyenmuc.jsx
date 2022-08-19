import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { menuHeads } from '../../Services/utils'
import CustomerSlider from '../CustomerSlider/CustomerSlider'
import TopTitle from '../Header/TopTitle'
import CatePost from '../Posts/PostChuyenmuc/CatePost'
import MainPosts from '../Posts/PostChuyenmuc/MainPosts'
import SidePosts from '../Posts/PostChuyenmuc/SidePosts'

const Chuyenmuc = () => {
  const [mainPosts, setMainPosts] = useState([])
  const [sidePosts, setSidePosts] = useState([])
  const [oaPosts, setOaPosts] = useState([])
  const [featurePosts, setFeaturePosts] = useState([])

  const { name } = useParams()

  useEffect(() => {
    const url = `https://kynguyenso.herokuapp.com/${name}`

    axios.get(url).then((res) => {
      const data = res.data.map((item) => ({
        title: item.title,
        url: item.link,
        image: item.image,
      }))
      setMainPosts(data.slice(4, 5))
      setSidePosts(data.slice(9, 11))

      setFeaturePosts(data.slice(11, 20))
      setOaPosts(data.slice(28, 40))
    })
  }, [name])

  const headerValue = menuHeads.filter((item) => item.url === name)[0].tittle
  const headerChildren = menuHeads.filter((item) => item.url === name)[0].chilren
  return (
    <>
      <Box maxWidth="1000px" m="auto">
        <TopTitle headtop={headerValue} headchild={headerChildren} />
      </Box>

      <Box maxWidth="1000px" m="auto">
        <Grid container spacing={3} sx={{ paddingBottom: '20px', marginBottom: '20px' }}>
          <MainPosts mainpost={mainPosts} />
          <SidePosts side={sidePosts} />
        </Grid>

        <CustomerSlider posts={featurePosts} />

        <Box sx={{ marginTop: '10px', paddingTop: '10px' }}>
          <CatePost catepost={oaPosts} />
        </Box>
      </Box>
    </>
  )
}

export default Chuyenmuc
