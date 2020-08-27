import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import Mob from './../Images/Mobile.svg'
import Tour from './../Images/Tourist.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import useWebAnimations from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(180deg, #00b4d8 30%, #90e0ef 80%)',
        height: '100%',
        overflowX: 'hidden',
        paddingTop:'100px',
        paddingBottom: '100px',
        paddingRight:'200px',
    },
    title: {
        marginTop: '-20px',
        fontFamily: 'Montserrat',
        fontSize: '38px',
        textAlign:'center',
        fontWeight: 'regular',
        color: 'black',
        paddingRight: '105px',
        textShadow: '1px 1px 4px #ffffff',
        paddingLeft:'140px',
    },
    subtext: {
        marginTop: '40px',
        fontFamily: 'Montserrat',
        textAlign: 'left',
        fontSize: '18px',
        fontWeight: 'regular',
        color: 'black',
        paddingLeft: '75px',
    },
    title2: {
        marginTop: '-20px',
        fontFamily: 'Montserrat',
        fontSize: '38px',
        textAlign:'center',
        fontWeight: 'regular',
        color: 'black',
        textShadow: '1px 1px 4px #ffffff',
        paddingLeft:'250px',
    },
    subtext2: {
        marginTop: '40px',
        fontFamily: 'Montserrat',
        textAlign: 'left',
        fontSize: '18px',
        fontWeight: 'regular',
        color: 'black',
        paddingLeft:'240px',
        width:'600px'
    },
    image: {
        width: '550px',
        height: 'auto',
        marginBottom:'70px',
        marginTop:'40px'
    },
    image2: {
        width: '700px',
        height: 'auto',
        marginBottom:'90px'
    },
}));


const Four = () => {

    const classes = useStyles();

    useEffect(() => {
        AOS.init();
    }, []);

    const { ref } = useWebAnimations({
        keyframes: 
        [{transform: 'scale(1)'},{transform: 'scale(1.1)'}],
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
                    <Col sm={6} style={{paddingRight:'50px'}}>
                        <div data-aos="zoom-in-right"
                            data-aos-offset="100"
                            data-aos-delay="500"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out" >
                            <img ref={ref} className={classes.image} src={Mob} alt="psoimage" />
                        </div>
                        <h6 className={classes.title}>ENGAGE</h6>
                        <p className={classes.subtext}>Enhance your communications with psychology-based copywriting and UX writing</p>
                    </Col>
                    <Col sm={6} style={{paddingLeft:'50px'}}>
                    <div data-aos="zoom-in-left"
                        data-aos-offset="100"
                        data-aos-delay="500"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out" >
                        <img className={classes.image2} src={Tour} alt="psoimage" />
                    </div> 
                    <h6 className={classes.title2}>COMMUNICATE</h6>
                    <p className={classes.subtext2}>Enhance your communications with psychology-based copywriting and UX writing</p>
                </Col>
                    </Row>
        </Container>
        </div >
    );
}

export default Four
