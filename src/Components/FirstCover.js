import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import useWebAnimations from "@wellyshen/use-web-animations";
import PSO from './../Images/PSO.svg';


const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(90deg, #ffd166 30%, #fdfcdc 80%)',
      height:'700px',
    },
    title: {
        margin: 0,
        fontFamily: 'Montserrat',
        fontSize: '102px',
        fontWeight:'regular', 
        color:'white',
        paddingTop:'140px',
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
        background: 'linear-gradient(to bottom, #23ffdb, #1b5dbf)',
        borderRadius:'30px',
        paddingTop:'10px',
        paddingBottom:'10px',
        paddingLeft:'40px',
        paddingRight:'40px',
    },
    image:{
      width:'650px',
      height:'auto',
      marginTop:'120px'
    },
  }));

const FirstCover = () => {

    const classes = useStyles();


    const { ref } = useWebAnimations({
        keyframes: 
        [{transform: 'translateY(0px)'},{transform: 'translateY(30px)'}],
        timing: {
          delay: 500, // Start with a 500ms delay
          duration: 1000, // Run for 1000ms
          iterations: Infinity, // Repeat once
          direction: "alternate", // Run the animation forwards and then backwards
          easing: "ease-in-out", // Use a fancy timing function
        },
    
        // More useful options...
      });

    return (
        <div className={classes.root}>
        <Container>
                    <Row>
                      <Col sm={6}>
                      <h5 className={classes.title}>INVEST</h5>
                      <h6 className={classes.title2}>TODAY</h6>
                      <p className={classes.subtext}>Enhance your communications with psychology-based copywriting and UX writing</p>
                      <Button className={classes.button} variant="primary">Send a message</Button>
                      </Col>
                      <Col sm={6}>
                        <img ref={ref} className={classes.image} src={PSO} alt="psoimage" />
                      </Col>
                    </Row>
        </Container>
        </div>
    )
}

export default FirstCover
