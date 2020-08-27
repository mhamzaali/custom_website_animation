import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(90deg, #46494c 30%, #4c5c68 80%)',
      height:'100px',
    },
    title: {
        display:'block',
        margin: '0 auto',
        textAlign:'center',
        width:'100%',
        fontFamily: 'Century Gothic',
        fontSize: '12px',
        fontWeight:'regular', 
        color:'white',
        paddingTop:'70px',
    },
  }));

const Footer = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Container>
                    <Row>
                      <Col sm={12}>
                      <h5 className={classes.title}>© All Copyrights reserved @ 2020 by Hamza Ali</h5>
                      </Col>
                    </Row>
        </Container>
        </div>
    )
}

export default Footer
