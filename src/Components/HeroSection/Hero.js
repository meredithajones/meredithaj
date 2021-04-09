import React, {useState} from 'react'
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP, 
HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'
import { Button } from '../ButtonElements'

const HeroSection = () => {
    const [hover, setHover] =useState(false) 

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id ="home">
            <HeroBg>
                <HeroContent>
                    <HeroH1>Hi! I'm Meredith,
                         <br/>Mission-driven Developer</HeroH1>
                        <HeroP>
                         Let's team up to solve problems using Tech!  
                        </HeroP>
                        <HeroBtnWrapper></HeroBtnWrapper>
                        <Button to="signup" 
                        onMouseEnter= {onHover}
                        onMouseLeave= {onHover}
                        primary= 'true'
                        dark = 'true'
                        > 
                            Take a Look at a few of my recent projects below {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                </HeroContent>
            </HeroBg>
            
        </HeroContainer>
    )
}

export default HeroSection