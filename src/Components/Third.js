import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import learning from './../Images/learning.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import useWebAnimations from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(180deg, #95d5b2 30%, #b7e4c7 80%)',
      height:'100%',
      overflowX:'hidden',
      paddingBottom:'100px',
    },
    title: {
        margin: 0,
        fontFamily: 'Montserrat',
        fontSize: '102px',
        fontWeight:'regular', 
        color:'white',
        paddingTop:'150px',
        paddingRight:'120px',
        textShadow: '2px 2px 4px #000000',
    },
    title2: {
        marginTop: '-20px',
        fontFamily: 'Montserrat',
        fontSize: '60px',
        fontWeight:'regular', 
        color:'white',
        paddingRight:'105px',
        textShadow: '1px 1px 4px #000000',
    },
    subtext: {
      marginTop: '40px',
      marginLeft:'10px',
      fontFamily: 'Montserrat',
      textAlign:'left',
      fontSize: '18px',
      fontWeight:'regular', 
      color:'white',
      paddingRight:'75px',
      textShadow: '1px 1px 1px #000000',
  },
    button:{
        marginTop: '40px',
        marginRight:'80px',
        paddingTop:'10px',
        paddingBottom:'10px',
        paddingLeft:'40px',
        paddingRight:'40px',
    },
    image:{
      width:'550px',
      height:'auto',
      marginRight:'-100px',

    },
    imageworld:{
        marginTop:'50px',
        marginBottom:'80px',
        marginLeft:'200px',
        width:'150px',
        height:'auto',
      },
  }));

const Third = () => {

    const classes = useStyles();

    useEffect( () =>{
        AOS.init();
    },[]);

    const { ref } = useWebAnimations({
        keyframes: 
        [{transform: 'translate(-120px,100px)'},{transform: 'translate(-90px,0px)'},{transform: 'translate(90px,0px)'},{transform: 'translate(120px,100px)'}],
        timing: {
          delay: 200, // Start with a 500ms delay
          duration: 2000, // Run for 1000ms
          iterations: Infinity, // Repeat once
          direction: "alternate", // Run the animation forwards and then backwards
        },
    
        // More useful options...
      });


    return (
        <div className={classes.root}>
        <Container>
                    <Row>
                      <Col sm={6}>
                      <h5 className={classes.title}>READ</h5>
                      <h6 className={classes.title2}>MORE</h6>
                      <p className={classes.subtext}>Enhance your communications with psychology-based copywriting and UX writing</p>
                      <Button className={classes.button} variant="danger">Order Books</Button>
                      </Col>
                      <Col sm={6}>
                      
                    <div data-aos="zoom-in" 
                         data-aos-offset="100"
                         data-aos-delay="600"
                         data-aos-duration="15000"
                         data-aos-easing="ease-in-out" >
                      <img ref={ref} className={classes.imageworld} src="https://www.svgrepo.com/show/300865/worldwide.svg" alt="world" />
                      <img className={classes.image} src={learning} alt="psoimage" />
                    </div>
                      </Col>
                    </Row>
        </Container>
        </div>
    )
}

export default Third
