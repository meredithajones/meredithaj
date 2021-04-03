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
                    <HeroH1>Hi! I'm Meredith, Developer with an eye for UX Design</HeroH1>
                        <HeroP>
                          I love solving problems with technology!  
                        </HeroP>
                        <HeroBtnWrapper></HeroBtnWrapper>
                        <Button to="signup" 
                        onMouseEnter= {onHover}
                        onMouseLeave= {onHover}
                        primary= 'true'
                        dark = 'true'
                        > 
                            Get Started {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                </HeroContent>
            </HeroBg>
            
        </HeroContainer>
    )
}

export default HeroSection