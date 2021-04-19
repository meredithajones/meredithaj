import React from 'react'
import styled from 'styled-components'
import {IconContext} from 'react-icons'
import { FiPlus, FiMinus} from 'react-icons/fi'

const AccordianSection = styled.div`

`

const Accordian = () => {
    return (
        <IconContext.Provider value={{ color: '#00FFB9',
        size: '25px'}}>
        <AccordianSection>
            Here's The Accordian!!!!
        </AccordianSection>
        </IconContext.Provider>
    )
}

export default Accordian;