import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import PSO from './../Images/Man_Coin.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles


const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(180deg, #f4acb7 30%, #ffcad4 80%)',
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
      marginTop:'170px',
      marginLeft:'-100px',
      offset:'700px',
    },
  }));

const SecondCover = () => {

    const classes = useStyles();



    useEffect( () =>{
        AOS.init();
    },[]);


    return (
        <div className={classes.root}>
        <Container>
                    <Row>
                      <Col sm={6}>
                    <div data-aos="fade-right" 
                         data-aos-offset="100"
                         data-aos-delay="500"
                         data-aos-duration="15000"
                         data-aos-easing="ease-in-out" >
                      <img  className={classes.image} src={PSO} alt="psoimage" />
                    </div>
                      </Col>
                      <Col sm={6}>
                      <h5 className={classes.title}>EARN</h5>
                      <h6 className={classes.title2}>MORE</h6>
                      <p className={classes.subtext}>Enhance your communications with psychology-based copywriting and UX writing</p>
                      <Button className={classes.button} variant="primary">Click to Start</Button>
                      </Col>
                    </Row>
        </Container>
        </div>
    )
}

export default SecondCover
