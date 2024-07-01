import React from 'react'
import Layout from '../components/Layout1/Layout'
import { Box,Typography } from '@mui/material'
const About = () => {
  return (
    <Layout> 
        <Box sx={{
          my:15,
          textAlign:"center",
          p:2,
         "& h4":{
          fontWeight:'bold',
          my:2,
          fontSize:'2rem',
         } ,
         "& p":{
          textAlign:'justify',
         },
         "@media(max-width:600px)":{
          mt:0,
          "& h4":{
            fontSize:"1.5rem",
          }
         }
        }}>
          <Typography variant="h4">
            Welcome To My Restaurnt
          </Typography>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Vero perferendis neque aliquam natus autem consequatur voluptatum quos cum hic, 
            harum voluptatem, magnam debitis rerum odio adipisci consectetur aperiam voluptatibus 
            dolores quibusdam aut, modi in quidem repellendus. Eum ex quidem assumenda nulla incidunt
             pariatur aperiam dolorum voluptate. Quibusdam, sequi aspernatur sed adipisci voluptatum 
             asperiores voluptatibus nemo id repudiandae nisi minima iste tenetur maxime atque soluta
              expedita fugiat nam necessitatibus earum temporibus perferendis similique dolorem culpa.
               Officia odit neque quidem qui maxime maiores distinctio aliquid quod asperiores iste nesciunt
                perferendis eius vero, inventore minus officiis. Facere itaque tempore possimus est 
                blanditiis quaerat!
          </p>
          <br/>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam impedit, eum labore sed 
            praesentium vel neque saepe laudantium tenetur ullam alias magni nulla ipsum cumque repudiandae
             exercitationem porro architecto aliquid quia autem magnam itaque. Ducimus quas explicabo consectetur 
             dolorum modi labore nulla hic dolores, enim repellendus optio perspiciatis ipsum amet qui dignissimos 
             rem quos. Ducimus eligendi doloremque fuga? Quas libero ratione doloribus incidunt quibusdam est, alias 
             officiis natus laboriosam officia dolores sequi quaerat accusamus blanditiis voluptatum. Eos officiis 
             adipisci voluptatibus. Quidem unde quod minus! Voluptates voluptatem, tempore cumque beatae culpa itaque
              eius enim ratione nesciunt sequi, aliquam est perspiciatis adipisci?
          </p>
        </Box>

       
    </Layout>
  )
}

export default About