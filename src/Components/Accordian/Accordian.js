import React, {useState} from 'react'
import styled from 'styled-components'
import {IconContext} from 'react-icons'
import { FiPlus, FiMinus} from 'react-icons/fi'
import { Data } from './Data'

const AccordianSection = styled.div`
    z-index: 100;
    width: 100%;
    height: 100%;
    background: #191970;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.3s ease-in-out;
    position: relative;

`;

const Container = styled.div `
    position: absolute;
    top: 30%;
    box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);

`;

const Wrap = styled.div `
    z-index: 100;
    background: #272727;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    text-align: center;
    cursor: pointer;

    span{
        margin-right: 1.5rem;
    }
`;

const Dropdown = styled.div `
    z-index: 100;
    background: #1c1c1c;
    color: #00ffb9;
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid;

`

export const Accordian = () => {
    const[clicked, setClicked] =useState(false);

    const toggle = index => {
        if(clicked === index) {
            //if clicked is already active, then close it.
            return setClicked(null);
        }
        setClicked(index)

    }

    return (
        <IconContext.Provider value={{ color: '#00FFB9',
        size: '25px'}}>
        <AccordianSection>
            <Container>
                {Data.map((item, index) => {
                    return (
                        <>
                        <Wrap onclick={() => toggle(index)} key= {index}>
                        <h1>{item.Heading}</h1>
                        <span>{clicked === index ? <FiMinus/> : <FiPlus />}</span>
                        </Wrap>
                        {clicked === index ?(
                            <Dropdown>
                        <p>{item.Body}</p>
                            </Dropdown>
                        ) : null}

                        </>
                    );
                })}
            </Container>
        </AccordianSection>
        </IconContext.Provider>
    )
}

export default Accordian;