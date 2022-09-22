import React from 'react';
import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/LogoDS.svg";

export const Banner = () => { 
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Solucionar Tu Necesidad", "Resolver Tu Problema", "UI/UX Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000; 

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }   

    return (
        <section className="banner" id="home">
            <Container>
                <Row className='aling-item-center'>
                    <Col >
                        <span className="tagline">Bienvenido a Dark Solution</span>
                        <img src={headerImg} alt="Headder Img"  /><br/>
                        <button onClick={() => console.log('connetc')} >Let's connect<ArrowRightCircle size={25}/></button>
                    </Col>

                
                </Row>
            </Container>
        </section>  
    )
}