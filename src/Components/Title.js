import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import useWebAnimations from "@wellyshen/use-web-animations";
import Pro from './../Images/Programer.svg';
import Typical from 'react-typical'

const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(90deg, #f4f3ee 30%, #dcdcdd 80%)',
      height:'700px',
    },
    title: {
        margin: 0,
        fontFamily: 'Montserrat',
        fontSize: '60px',
        fontWeight:'regular', 
        color:'black',
        paddingTop:'140px',
        marginRight:'0px',
        marginLeft:'-100px',
        textShadow: '2px 2px 4px #ffffff',
        marginBottom: '100px',
    },
    subtext: {
      marginTop: '40px',
      marginLeft:'-100px',
      fontFamily: 'Montserrat',
      textAlign:'left',
      fontSize: '88px',
      fontWeight:'regular', 
      color:'black',
      paddingRight:'75px',
      textShadow: '1px 1px 1px #ffffff',
  },
    image:{
      width:'650px',
      height:'auto',
      marginTop:'60px'
    },
  }));

const Title = () => {

    const classes = useStyles();


    const { ref } = useWebAnimations({
        keyframes: 
        [{transform: 'translateX(-30px)'},{transform: 'translateX(30px)'}],
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
                      <h5 className={classes.title}>We Deal with the following :</h5>
                      
                      <Typical className={classes.subtext}
                        steps={['HTML', 1000, 
                                'CSS', 1000,
                                'JS', 1000,
                                'REACT.JS', 1000,
                                'JQUERY', 1000,
                                'PHP', 1000,
                                'C++', 1000, 
                                'C', 1000,
                                'C#', 1000,
                                '.NET', 1000,
                                'ASP.NET', 1000,
                              ]}
                        loop={Infinity}
                        wrapper="b"
                      />
                      </Col>
                      <Col sm={6}>
                        <img ref={ref} className={classes.image} src={Pro} alt="psoimage" />
                      </Col>
                    </Row>
        </Container>
        </div>
    )
}

export default Title
