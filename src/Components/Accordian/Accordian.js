import React, {useState} from 'react'
import styled from 'styled-components'
import {IconContext} from 'react-icons'
import { FiPlus, FiMinus} from 'react-icons/fi'
import { Data } from './data'

const AccordianSection = styled.div`
    position: relative;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #191970;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;

`;

const Container = styled.div `
    position: absolute;
    top: 30%;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);

`;

const Wrap = styled.div `
    background: #272727;
    color: #fff;
    display: flex;
    justify-content: space-space-between;
    align-items: center;
    text-align: center;
    cursor: pointer;
`;

const Accordian = () => {
    const[clicked, setClicked] =useState(false)

    const toggle = index =>{
        
    }

    return (
        <IconContext.Provider value={{ color: '#00FFB9',
        size: '25px'}}>
        <AccordianSection>
            <Container>
                {Data.map((item, index) => {
                    return (
                        <>
                        <Wrap>
                        <h1>{item.Heading}</h1>
                        </Wrap>
                        <p>{item.Body}</p>
                        </>

                    );
                })}
            </Container>
        </AccordianSection>
        </IconContext.Provider>
    )
}

export default Accordian;